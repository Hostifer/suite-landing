"use client";

import { type FormEvent, useState } from "react";
import { Button, Field, Input, Select, Textarea } from "@hostifer/shared-ui";
import { brand } from "@/components/site/theme";

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter" },
  { value: "business", label: "Business" },
  { value: "dedicated", label: "Dedicated" },
  { value: "unsure", label: "Not sure yet" },
];

const NEXT_STEPS = [
  "We review your request",
  "We help configure your domain",
  "Your team starts using the workspace",
];

export function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phone: "",
    numUsers: "",
    existingDomain: "",
    plan: "business",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const reset = () => {
    setForm({
      fullName: "",
      companyName: "",
      workEmail: "",
      phone: "",
      numUsers: "",
      existingDomain: "",
      plan: "business",
      message: "",
    });
    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(
          body?.error ?? "Could not send your request. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstName = form.fullName ? `, ${form.fullName.split(" ")[0]}` : "";
  const company = form.companyName || "your company";

  return (
    <div
      className="ct-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 32,
        alignItems: "start",
      }}
    >
      {/* FORM CARD */}
      <div
        style={{
          background: "#fff",
          border: `1px solid ${brand.border}`,
          borderRadius: 22,
          padding: 36,
          boxShadow: "0 20px 44px -22px rgba(15,23,42,0.12)",
        }}
      >
        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 10px" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#e4f8f4",
                color: "#1e8a78",
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontFamily: brand.fontHeading,
                fontWeight: 700,
                fontSize: 22,
                margin: "0 0 10px",
                color: brand.ink,
              }}
            >
              Request received
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: brand.secondary,
                lineHeight: 1.6,
                maxWidth: 380,
                margin: "0 auto 24px",
              }}
            >
              Thanks{firstName} — our team will reach out shortly to help set up{" "}
              {company}&apos;s workspace.
            </p>
            <Button variant="secondary" onClick={reset}>
              Submit another request
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div
              className="ct-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <Field id="fullName" label="Full name">
                <Input
                  id="fullName"
                  value={form.fullName}
                  onChange={(e) => set("fullName")(e.target.value)}
                  placeholder="Amina Khelifi"
                />
              </Field>
              <Field id="companyName" label="Company name">
                <Input
                  id="companyName"
                  value={form.companyName}
                  onChange={(e) => set("companyName")(e.target.value)}
                  placeholder="Hostifer SARL"
                />
              </Field>
            </div>
            <div
              className="ct-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <Field id="workEmail" label="Work email">
                <Input
                  id="workEmail"
                  type="email"
                  required
                  value={form.workEmail}
                  onChange={(e) => set("workEmail")(e.target.value)}
                  placeholder="you@hostifer.dz"
                />
              </Field>
              <Field id="phone" label="Phone number">
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                  placeholder="+213 5XX XX XX XX"
                />
              </Field>
            </div>
            <div
              className="ct-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <Field id="numUsers" label="Number of users">
                <Input
                  id="numUsers"
                  type="number"
                  min={1}
                  value={form.numUsers}
                  onChange={(e) => set("numUsers")(e.target.value)}
                  placeholder="e.g. 12"
                />
              </Field>
              <Field id="existingDomain" label="Existing domain (optional)">
                <Input
                  id="existingDomain"
                  value={form.existingDomain}
                  onChange={(e) => set("existingDomain")(e.target.value)}
                  placeholder="hostifer.dz"
                />
              </Field>
            </div>
            <Field id="plan" label="Interested plan">
              <Select
                id="plan"
                value={form.plan}
                onValueChange={set("plan")}
                options={PLAN_OPTIONS}
              />
            </Field>
            <Field id="message" label="Message (optional)">
              <Textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="Tell us a bit about your team and what you need."
              />
            </Field>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              style={{ justifyContent: "center", width: "100%" }}
            >
              {isSubmitting ? "Sending request..." : "Request trial / demo"}
            </Button>
            {submitError ? (
              <p
                role="alert"
                style={{
                  fontSize: 13,
                  color: "#b42318",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                {submitError}
              </p>
            ) : null}
            <p
              style={{
                fontSize: 12,
                color: brand.muted,
                textAlign: "center",
                margin: 0,
              }}
            >
              By submitting, you agree to be contacted by our sales team.
            </p>
          </form>
        )}
      </div>

      {/* SIDEBAR */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            background: "#fff",
            border: `1px solid ${brand.border}`,
            borderRadius: 20,
            padding: 26,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#4a6cf7",
              textTransform: "uppercase",
              letterSpacing: ".04em",
              marginBottom: 16,
            }}
          >
            What happens next
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {NEXT_STEPS.map((step, i) => (
              <div
                key={step}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "#e9effe",
                    color: "#2456c9",
                    fontSize: 12,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div
                  style={{
                    fontSize: 13.5,
                    color: brand.ink,
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            background: brand.dark,
            borderRadius: 20,
            padding: 26,
            color: "#fff",
          }}
        >
          <div style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 6 }}>
            Prefer to talk to sales directly?
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#a7adbb",
              lineHeight: 1.5,
              margin: "0 0 16px",
            }}
          >
            Our team can walk you through plans and dedicated environments.
          </p>
          <a
            href="mailto:sales@hostifer.dev"
            style={{
              display: "block",
              background: "#fff",
              color: brand.ink,
              fontSize: 13.5,
              fontWeight: 700,
              padding: 11,
              borderRadius: 100,
              textAlign: "center",
            }}
          >
            sales@hostifer.dev
          </a>
        </div>
        <div
          style={{
            background: "#fff",
            border: `1px solid ${brand.border}`,
            borderRadius: 20,
            padding: 26,
          }}
        >
          <div
            style={{
              fontSize: 14.5,
              fontWeight: 700,
              color: brand.ink,
              marginBottom: 6,
            }}
          >
            Support
          </div>
          <p
            style={{
              fontSize: 13,
              color: brand.secondary,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Existing customer? Reach support at{" "}
            <a
              href="mailto:support@hostifer.dev"
              style={{ color: "#4a6cf7", fontWeight: 700 }}
            >
              support@hostifer.dev
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
