"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";

const sizes: ContactInput["size"][] = ["1-10", "11-50", "51-200", "200+"];
const topics: ContactInput["topic"][] = [
  "AI literacy & workshops",
  "Workflow audit",
  "Custom implementation",
  "Fractional leadership",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

const baseField =
  "w-full rounded-xl bg-[oklch(1_0_0/0.03)] border border-[--border] px-4 py-3 text-[--fg] placeholder:text-[--fg-faint] transition-colors duration-300 focus:border-[--accent]/60 focus:bg-[oklch(1_0_0/0.05)] focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { size: "11-50", topic: "Not sure yet" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Could not send message.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function mailtoFallback() {
    const v = getValues();
    const subject = encodeURIComponent(`[Cairnity] ${v.name ?? ""} — ${v.topic ?? ""}`);
    const body = encodeURIComponent(
      `Name: ${v.name ?? ""}\nEmail: ${v.email ?? ""}\nCompany: ${v.company ?? ""}\nSize: ${v.size ?? ""}\nTopic: ${v.topic ?? ""}\n\n${v.message ?? ""}`,
    );
    window.location.href = `mailto:hello@cairnity.com?subject=${subject}&body=${body}`;
  }

  return (
    <GlassCard className="!p-6 md:!p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-10"
          >
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-[oklch(0.80_0.13_75/0.15)] border border-[--accent]/40">
              <CheckCircle2 className="size-7 text-[--accent]" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-[--fg]">
              Message received.
            </h3>
            <p className="mt-3 text-[--fg-muted] max-w-md mx-auto">
              We&apos;ll get back to you within one business day — usually the same
              afternoon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm text-[--accent] hover:underline"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Avery Chen"
                  className={baseField}
                  {...register("name")}
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="avery@company.com"
                  className={baseField}
                  {...register("email")}
                />
              </Field>
            </div>

            <Field label="Company" error={errors.company?.message}>
              <input
                type="text"
                autoComplete="organization"
                placeholder="Acme Holdings"
                className={baseField}
                {...register("company")}
              />
            </Field>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Company size" error={errors.size?.message}>
                <select className={cn(baseField, "appearance-none")} {...register("size")}>
                  {sizes.map((s) => (
                    <option key={s} value={s} className="bg-[--bg-elev]">
                      {s} people
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="What you'd like help with" error={errors.topic?.message}>
                <select className={cn(baseField, "appearance-none")} {...register("topic")}>
                  {topics.map((t) => (
                    <option key={t} value={t} className="bg-[--bg-elev]">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="A few sentences on what you're hoping to figure out" error={errors.message?.message}>
              <textarea
                rows={5}
                placeholder="We're a 40-person agency exploring how to use AI in client research without exposing our data…"
                className={cn(baseField, "resize-y min-h-[140px]")}
                {...register("message")}
              />
            </Field>

            {status === "error" && (
              <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-200">
                <AlertCircle className="mt-0.5 size-4 shrink-0" />
                <div>
                  <p>{serverError}</p>
                  <button
                    type="button"
                    onClick={mailtoFallback}
                    className="mt-2 underline underline-offset-2 hover:text-white"
                  >
                    Or send by email instead
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-[--fg-faint]">
                We reply to every message personally. Promise.
              </p>
              <Button type="submit" size="md" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
                {status !== "submitting" && <Send className="size-4" />}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-[--fg-faint]">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error && (
        <span className="mt-1 inline-block text-xs text-red-300">{error}</span>
      )}
    </label>
  );
}
