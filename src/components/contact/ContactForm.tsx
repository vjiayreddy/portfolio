"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FieldError, Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactFormErrors } from "@/lib/validations/contact";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("loading");
    setErrors({});
    setServerError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
        website: fieldErrors.website?.[0],
      });
      setFormState("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        errors?: ContactFormErrors;
      };

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(data.error ?? "Failed to send message.");
        setFormState("error");
        return;
      }

      setFormState("success");
      event.currentTarget.reset();
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div
        className="rounded-xl border border-success/30 bg-success/10 p-6 text-center"
        role="status"
      >
        <h3 className="text-lg font-semibold text-foreground">
          Message sent successfully
        </h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-4"
          onClick={() => setFormState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          error={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={formState === "loading"}
        />
        <FieldError id="name-error" message={errors.name} />
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={formState === "loading"}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          error={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          disabled={formState === "loading"}
        />
        <FieldError id="subject-error" message={errors.subject} />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, role, or question..."
          error={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={formState === "loading"}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {serverError && (
        <p className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm text-error" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={formState === "loading"}>
        {formState === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
