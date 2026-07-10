"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MessageCircle,
  MonitorPlay,
  User,
  Stethoscope,
  UsersRound,
  Building2,
  FlaskConical,
  Code2,
  MoreHorizontal,
  Lock,
  Headphones,
  Handshake,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import contactSupport from "@/assets/contact-support.jpg";

const categories = [
  {
    icon: User,
    title: "Patient",
    text: "Questions about your health records, portal access, or account.",
  },
  {
    icon: Stethoscope,
    title: "Primary Care Provider",
    text: "Learn how TrialCliniq supports your practice and referrals.",
  },
  {
    icon: UsersRound,
    title: "Referral Coordinator",
    text: "Questions about referral workflows and care coordination.",
  },
  {
    icon: Building2,
    title: "Hospital / Health System",
    text: "Partnerships, implementation, and enterprise solutions.",
  },
  {
    icon: FlaskConical,
    title: "Research Organization",
    text: "Clinical trials, research matching, and data partnerships.",
  },
  {
    icon: Code2,
    title: "Technology Partner",
    text: "Integrations, APIs, and technology partnerships.",
  },
];

const channels = [
  {
    icon: Headphones,
    title: "Patient Support",
    text: "Get help with your portal, account, consent, and general questions.",
    email: "support@trialcliniq.health",
  },
  {
    icon: Handshake,
    title: "Sales & Partnerships",
    text: "Partnerships, pricing, demos, and enterprise solutions.",
    email: "partnerships@trialcliniq.health",
  },
  {
    icon: Code2,
    title: "Technical Support",
    text: "HealthEx integration, FHIR APIs, and developer support.",
    email: "integrations@trialcliniq.health",
  },
];

const faqs = [
  "Can I use TrialCliniQ if my provider isn't connected yet?",
  "How do I connect my HealthEx account?",
  "Is my health information secure?",
  "How can my hospital partner with TrialCliniQ?",
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Get in touch</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              We're here to help.
            </h1>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Whether you're a patient, healthcare provider, hospital, or research organization, our
              team is ready to answer your questions and help you get started with TrialCliniq.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#message"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" /> Patient Support
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-card px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-lavender"
              >
                <MonitorPlay className="h-4 w-4" /> Request a Demo
              </a>
            </div>
          </div>
          <img
            src={contactSupport.src}
            alt="TrialCliniq support specialist ready to help"
            width={1024}
            height={640}
            className="w-full rounded-2xl object-cover shadow-float"
          />
        </div>
      </section>

      {/* Categories + form */}
      <section id="message" className="py-14">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-extrabold">I am contacting about…</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {categories.map((c) => (
                <button
                  key={c.title}
                  onClick={() => setSelected(c.title)}
                  className={`rounded-xl border p-4 text-center transition-colors ${
                    selected === c.title
                      ? "border-primary bg-lavender"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-lavender-strong">
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="mt-2 block text-xs font-bold">{c.title}</span>
                  <span className="mt-1 block text-[10px] text-muted-foreground">{c.text}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelected("Other")}
              className={`mt-3 flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                selected === "Other"
                  ? "border-primary bg-lavender"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lavender-strong">
                <MoreHorizontal className="h-4 w-4 text-primary" />
              </span>
              <span>
                <span className="block text-xs font-bold">Other</span>
                <span className="text-[10px] text-muted-foreground">
                  General questions or other inquiries.
                </span>
              </span>
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-extrabold">Send us a message</h2>
            {sent ? (
              <div className="mt-8 rounded-xl bg-success-soft p-6 text-center">
                <Check className="mx-auto h-8 w-8 text-success" />
                <p className="mt-2 text-sm font-bold">Message sent!</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="Ann Jacobs" required />
                  <Field
                    label="Email Address"
                    placeholder="ann@example.com"
                    type="email"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Organization (Optional)" placeholder="Community Care Center" />
                  <SelectField
                    label="I am a"
                    options={[
                      "Patient",
                      "Provider",
                      "Coordinator",
                      "Hospital / Health System",
                      "Research Organization",
                      "Technology Partner",
                      "Other",
                    ]}
                  />
                </div>
                <SelectField
                  label="Subject"
                  options={[
                    "General inquiry",
                    "Portal access",
                    "Partnership",
                    "Technical support",
                    "Request a demo",
                  ]}
                />
                <div>
                  <label className="text-xs font-bold">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-ring"
                  />
                </div>
                <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" /> Your information is secure and will only be used
                  to respond to your inquiry.
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send Message <ChevronRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="pb-14">
        <div className="container-site">
          <h2 className="text-lg font-extrabold">Other ways to reach us</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-card-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender-strong">
                  <c.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-3 text-sm font-bold">{c.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{c.text}</p>
                <p className="mt-3 text-xs font-bold text-primary">{c.email}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Response within 1 business day
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-lavender-strong p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-3 text-sm font-bold">Secure &amp; Compliant</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "HIPAA-Compliant Communication",
                  "End-to-End Encrypted Messages",
                  "Response Within One Business Day",
                  "Dedicated Integration Support",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] font-semibold">
                    <Check className="h-3.5 w-3.5 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="pb-14">
        <div className="container-site grid items-center gap-8 rounded-3xl bg-lavender p-8 lg:grid-cols-[auto_1fr] lg:p-12">
          <div className="hidden items-center justify-center lg:flex">
            <DemoMockup />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Want to see TrialCliniq in action?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Schedule a personalized demo to learn how our platform helps healthcare organizations
              identify patients who may benefit from specialty care and clinical trial
              opportunities.
            </p>
            <Link
              href="/features"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MonitorPlay className="h-4 w-4" /> Request a Demo{" "}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-16">
        <div className="container-site">
          <h2 className="text-lg font-extrabold">Frequently Asked Questions</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {faqs.map((q) => (
              <details key={q} className="group rounded-xl border border-border bg-card px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-bold">
                  {q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-2 text-xs text-muted-foreground">
                  Our team can walk you through the details — reach out via the form above and we'll
                  respond within one business day.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-bold">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-ring"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-bold">{label}</label>
      <select className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-muted-foreground outline-none transition-colors focus:border-ring">
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function DemoMockup() {
  return (
    <svg viewBox="0 0 320 220" className="h-44 w-72" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="110" rx="150" ry="95" fill="var(--color-lavender)" />

      {/* Laptop base */}
      <path d="M40 165 L280 165 L265 185 L55 185 Z" fill="var(--color-border)" />

      {/* Laptop screen */}
      <rect
        x="55"
        y="35"
        width="210"
        height="135"
        rx="10"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <rect x="67" y="47" width="186" height="14" rx="4" fill="var(--color-lavender-strong)" />
      <circle cx="75" cy="54" r="2.5" fill="var(--color-primary)" />

      {/* Chart card */}
      <rect x="67" y="70" width="86" height="50" rx="6" fill="var(--color-lavender-strong)" />
      <polyline
        points="74,110 88,98 100,104 112,90 124,96 136,82 146,88"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Stat card */}
      <rect x="161" y="70" width="92" height="50" rx="6" fill="var(--color-lavender-strong)" />
      <rect x="170" y="80" width="40" height="8" rx="2" fill="var(--color-primary)" opacity="0.5" />
      <rect x="170" y="94" width="60" height="16" rx="4" fill="var(--color-success-soft)" />
      <text x="176" y="105" fontSize="9" fontWeight="700" fill="var(--color-success)">
        +18%
      </text>

      {/* Bottom info rows */}
      <rect x="67" y="128" width="186" height="30" rx="6" fill="var(--color-lavender-strong)" />
      <rect x="75" y="136" width="120" height="6" rx="3" fill="var(--color-border)" />
      <rect x="75" y="146" width="80" height="6" rx="3" fill="var(--color-border)" />

      {/* Phone */}
      <rect
        x="205"
        y="95"
        width="70"
        height="120"
        rx="14"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <rect x="213" y="107" width="54" height="10" rx="3" fill="var(--color-lavender-strong)" />
      <rect x="213" y="123" width="54" height="34" rx="6" fill="var(--color-lavender-strong)" />
      <polyline
        points="219,148 228,140 236,144 245,132 253,138 261,128"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="213" y="163" width="54" height="10" rx="3" fill="var(--color-success-soft)" />
      <rect x="213" y="177" width="34" height="8" rx="2" fill="var(--color-border)" />
      <circle cx="240" cy="205" r="4" fill="var(--color-border)" />
    </svg>
  );
}
