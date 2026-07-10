import type { Metadata } from "next";
import Link from "next/link";
import {
  Link2,
  Brain,
  UsersRound,
  FlaskConical,
  MonitorCheck,
  ShieldCheck,
  Check,
  Lock,
  ChevronRight,
  UserPlus,
  ShieldPlus,
  Bell,
  ClipboardCheck,
  Flame,
  Network,
  Cloud,
  Cpu,
  Eye,
  Wifi,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import ctaWoman from "@/assets/hero-home.jpg";

export const metadata: Metadata = {
  title: "Features — TrialCliniq Clinical Intelligence Platform",
  description:
    "Secure health record integration, clinical rules engine, referral intelligence, trial matching, and enterprise-grade security — all in one platform.",
  openGraph: {
    title: "Features — TrialCliniq Clinical Intelligence Platform",
    description:
      "Core platform capabilities that help your care team make smarter, faster decisions.",
  },
};

const capabilities = [
  {
    icon: Link2,
    title: "Secure Health Record Integration",
    text: "Connect to participating healthcare providers through HealthEx and FHIR-enabled EHRs.",
    items: [
      "HealthEx Integration",
      "eClinicalWorks (Coming Soon)",
      "Epic (Future)",
      "Oracle Health (Future)",
      "TEFCA Ready",
    ],
  },
  {
    icon: Brain,
    title: "Clinical Rules Engine",
    text: "Our configurable engine analyzes health data to identify patients who may benefit from additional care.",
    items: [
      "Specialty Referral Recommendations",
      "Clinical Trial Matching",
      "Care Gap Detection (Future)",
      "Risk Alerts (Future)",
    ],
  },
  {
    icon: UsersRound,
    title: "Referral Intelligence",
    text: "Help providers identify patients who may need specialist evaluation before conditions worsen.",
    items: ["Cardiology", "Neurology", "Oncology", "Endocrinology", "And more"],
  },
  {
    icon: FlaskConical,
    title: "Clinical Trial Matching",
    text: "When appropriate, TrialCliniq identifies clinical trials that match a patient's health profile.",
    items: [
      "Evidence-based matching",
      "Patient consent always required",
      "Built-in compliance & safety",
    ],
  },
  {
    icon: MonitorCheck,
    title: "Clinical Operations Dashboard",
    text: "Tools for care teams to manage referrals, patients, and outcomes efficiently.",
    items: [
      "Review recommendations",
      "Manage referral queues",
      "Track patient progress",
      "Monitor referral outcomes",
      "Review trial candidates",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    text: "Your health information remains protected at every step.",
    items: [
      "HIPAA Ready",
      "End-to-End Encryption",
      "Patient-Controlled Consent",
      "Audit Logging",
      "Role-Based Access Control",
    ],
  },
];

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    text: "Sign up in minutes and set your profile.",
  },
  {
    icon: ShieldPlus,
    title: "Connect your health records",
    text: "Securely link your EHR through HealthEx or participating providers.",
  },
  {
    icon: Lock,
    title: "Grant consent",
    text: "You control what data we can access and for how long.",
  },
  {
    icon: Brain,
    title: "We analyze your data",
    text: "Our Clinical Intelligence Engine reviews your health information.",
  },
  {
    icon: Bell,
    title: "Providers receive recommendations",
    text: "Referral opportunities and trial matches are sent to your care team.",
  },
  {
    icon: UsersRound,
    title: "Your care team takes the next steps",
    text: "Your provider discusses options and coordinates your care.",
  },
];

const trustBadges = [
  { icon: Flame, label: "FHIR Native" },
  { icon: Network, label: "TEFCA Ready" },
  { icon: Link2, label: "HealthEx Integration" },
  { icon: ShieldCheck, label: "HIPAA Ready" },
  { icon: Cloud, label: "Multi-tenant SaaS" },
  { icon: Cpu, label: "AI-Ready Architecture" },
];

export default function FeaturesPage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Capabilities
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Clinical intelligence that works with{" "}
              <span className="text-gradient-brand">your care team</span>.
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Securely connect your health records, identify patients who may benefit from specialty
              care, and coordinate referrals — all from one intelligent platform.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Lock className="h-4 w-4" /> Connect Health Records
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                See Platform Demo <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold text-foreground/80">
              {[
                { icon: ShieldCheck, label: "HIPAA Ready" },
                { icon: Wifi, label: "TEFCA Ready" },
                { icon: Link2, label: "HealthEx Integrated" },
                { icon: Eye, label: "Patient Controlled" },
              ].map((b) => (
                <span key={b.label} className="flex flex-col items-center gap-1.5">
                  <b.icon className="h-5 w-5 text-primary" /> {b.label}
                </span>
              ))}
            </div>
          </div>

          <PortalMock />
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-card py-16">
        <div className="container-site">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Core Platform Capabilities
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Powerful features that help your care team make smarter, faster decisions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-card-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-strong">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-extrabold">{c.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.text}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                      <Check className="h-3.5 w-3.5 text-success" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container-site">
          <h2 className="text-center text-2xl font-extrabold tracking-tight">
            How TrialCliniq Works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lavender">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-xs font-bold">{s.title}</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid items-center gap-6 rounded-2xl bg-lavender-strong px-8 py-6 lg:grid-cols-[auto_1fr]">
            <p className="text-lg font-extrabold leading-tight">
              Built for trust.
              <br />
              Designed for care.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {trustBadges.map((b) => (
                <span key={b.label} className="flex items-center gap-2 text-xs font-semibold">
                  <b.icon className="h-5 w-5 text-primary" /> {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="container-site">
          <div className="grid overflow-hidden rounded-3xl bg-lavender lg:grid-cols-[1.1fr_1fr_1fr]">
            <div className="p-8 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Ready to get started?
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                Smarter referrals. Better care.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Connect your health records securely and help your care team make more informed
                decisions about your health.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get Started <ChevronRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="text-sm font-bold text-primary">
                  Learn How It Works →
                </Link>
              </div>
            </div>

            {/* Photo — blends into the panel on both edges instead of ending in a hard cut */}
            <div className="relative hidden min-h-[300px] lg:block">
              <img
                src={ctaWoman.src}
                alt="Patient smiling while using the TrialCliniq app"
                className="h-full w-full object-cover"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%)",
                }}
              />
            </div>

            <div className="flex items-center p-8 lg:p-12">
              <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <p className="flex items-center gap-2 text-sm font-extrabold">
                  <Lock className="h-4 w-4 text-primary" /> Your privacy comes first.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "You control your data",
                    "You can disconnect anytime",
                    "We never store your credentials",
                    "Encrypted in transit and at rest",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                      <Check className="h-3.5 w-3.5 text-success" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PortalMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-float">
      <div className="grid sm:grid-cols-[150px_1fr_150px]">
        <aside className="hidden border-r border-border bg-muted/50 p-4 sm:block">
          <p className="text-[11px] font-extrabold">✕ TrialCliniq</p>
          <ul className="mt-4 space-y-1.5 text-[10px] font-semibold text-muted-foreground">
            <li className="rounded-md bg-lavender-strong px-2 py-1.5 text-primary">Dashboard</li>
            {[
              "Recommendations",
              "Health Records",
              "Referrals",
              "Trial Matches",
              "Care Team",
              "Messages",
              "Reports",
              "Settings",
            ].map((i) => (
              <li key={i} className="px-2 py-1.5">
                {i}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-4">
          <p className="text-xs font-extrabold">Welcome back, Ann Jacobs</p>
          <div className="mt-3 rounded-xl border border-border p-3">
            <p className="text-[10px] font-bold">Health Summary</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xl font-extrabold text-success">92</p>
                <p className="text-[9px] text-muted-foreground">Health Score</p>
              </div>
              <div>
                <p className="text-xl font-extrabold">3</p>
                <p className="text-[9px] text-muted-foreground">Active Conditions</p>
              </div>
              <div>
                <p className="text-xl font-extrabold">5</p>
                <p className="text-[9px] text-muted-foreground">Medications</p>
              </div>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-border p-2.5">
              <p className="text-[9px] font-bold">Cardiology referral recommended</p>
              <p className="mt-1 text-[9px] text-muted-foreground">
                Based on recent telemetry and clinical data.
              </p>
              <p className="mt-1 text-[9px] font-bold text-primary">View details →</p>
            </div>
            <div className="rounded-xl border border-border p-2.5">
              <p className="text-[9px] font-bold">Clinical Trial Matches</p>
              <p className="mt-1 text-[9px] text-muted-foreground">
                2 opportunities match your profile
              </p>
              <p className="mt-1 text-[9px] font-bold text-primary">View matches →</p>
            </div>
          </div>
          <div className="mt-2 rounded-xl border border-border p-2.5">
            <p className="text-[9px] font-bold">Recent Activity</p>
            <ul className="mt-1.5 space-y-1 text-[9px] text-muted-foreground">
              <li className="flex justify-between">
                Vitals data synced{" "}
                <span className="rounded-full bg-success-soft px-1.5 font-bold text-success">
                  Completed
                </span>
              </li>
              <li className="flex justify-between">
                Lab results available{" "}
                <span className="rounded-full bg-success-soft px-1.5 font-bold text-success">
                  Completed
                </span>
              </li>
              <li className="flex justify-between">
                New care recommendation{" "}
                <span className="rounded-full bg-lavender-strong px-1.5 font-bold text-primary">
                  New
                </span>
              </li>
            </ul>
          </div>
        </div>
        <aside className="hidden border-l border-border p-4 lg:block">
          <p className="text-[10px] font-bold">Care Team</p>
          <ul className="mt-2 space-y-2 text-[9px]">
            {[
              ["Dr. Sarah Chen", "Primary Care"],
              ["Dr. Michael Lee", "Cardiology"],
              ["Nurse Jamie", "Care Coordinator"],
            ].map(([name, role]) => (
              <li key={name} className="flex items-center gap-1.5">
                <span className="h-5 w-5 rounded-full bg-lavender-strong" />
                <span>
                  <span className="block font-bold">{name}</span>
                  <span className="text-muted-foreground">{role}</span>
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-3 w-full rounded-md bg-primary px-2 py-1.5 text-[9px] font-bold text-primary-foreground">
            Message Care Team
          </button>
          <p className="mt-3 text-[10px] font-bold">Next Appointment</p>
          <p className="mt-1 text-[9px] font-bold">Dr. Sarah Chen · Cardiology</p>
          <p className="text-[9px] text-muted-foreground">May 20, 2026 · 10:30 AM</p>
        </aside>
      </div>
    </div>
  );
}
