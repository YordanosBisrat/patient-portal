import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  MessageCircle,
  HeartHandshake,
  FlaskConical,
  FolderHeart,
  MessagesSquare,
  CalendarCheck,
  Lock,
  UserPlus,
  ShieldPlus,
  Brain,
  ClipboardCheck,
  UsersRound,
  ChevronRight,
  Plus,
  Flame,
  Network,
  Building2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroHome from "@/assets/hero-home.jpg";
import ctaMan from "@/assets/cta-man.png";

export const metadata: Metadata = {
  title: "TrialCliniq — Smarter Healthcare with Connected Records",
  description:
    "Connect your health records securely, receive personalized care recommendations, and discover clinical trial opportunities — all in one place.",
  openGraph: {
    title: "TrialCliniq — Smarter Healthcare with Connected Records",
    description:
      "Connect your health records securely, get care recommendations, and discover clinical trials.",
  },
};

const actionable = [
  {
    icon: HeartHandshake,
    title: "Referral Recommendations",
    text: "We identify when you may benefit from specialist care.",
  },
  {
    icon: FlaskConical,
    title: "Clinical Trial Opportunities",
    text: "Find trials you may qualify for, based on your health profile.",
  },
  {
    icon: FolderHeart,
    title: "All Your Records",
    text: "Labs, vitals, medications and more, in one secure place.",
  },
  {
    icon: MessagesSquare,
    title: "Care Team Messaging",
    text: "Message your care team anytime, in one inbox.",
  },
  {
    icon: CalendarCheck,
    title: "Appointments Made Easy",
    text: "Book, reschedule, or cancel visits in just a few taps.",
  },
];

const steps = [
  { icon: UserPlus, title: "Create your account", text: "Sign up in minutes." },
  {
    icon: ShieldPlus,
    title: "Connect your health records",
    text: "Securely link through HealthEx or your provider.",
  },
  { icon: Lock, title: "Grant permission", text: "You control what data we can access." },
  {
    icon: Brain,
    title: "We analyze your data",
    text: "Our Clinical Intelligence Engine reviews your health information.",
  },
  {
    icon: ClipboardCheck,
    title: "Receive personalized recommendations",
    text: "Get referral and trial opportunities.",
  },
  {
    icon: UsersRound,
    title: "Your care team coordinates next steps",
    text: "We help your provider take action.",
  },
];

const privacy = [
  "You control who can access your records.",
  "You can disconnect anytime.",
  "TrialCliniq never stores your HealthEx password.",
  "Your information is encrypted in transit and at rest.",
  "Your healthcare provider remains in control of your care.",
];

const trust = [
  { icon: Flame, title: "FHIR Native", text: "Built on the latest FHIR standards" },
  {
    icon: ShieldCheck,
    title: "TEFCA Ready",
    text: "Interoperable across the connected health ecosystem",
  },
  {
    icon: Network,
    title: "HealthEx Integration",
    text: "Seamless and secure health record access",
  },
  { icon: Lock, title: "HIPAA Ready", text: "Enterprise-grade security and compliance" },
  {
    icon: Building2,
    title: "Multi-tenant SaaS",
    text: "Built to scale for health systems, providers, and partners",
  },
];

const faqs = [
  "Why should I connect my health records?",
  "How does TrialCliniq protect my privacy?",
  "Will TrialCliniq change my medical records?",
  "Who can see my health information?",
  "Can I disconnect my HealthEx account?",
];

export default function HomePage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Full-bleed photo — bleeds to the browser edge, fades into the section background on the left */}
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img
            src={heroHome.src}
            alt="Patient reviewing her connected health records on a smartphone"
            className="h-full w-full object-cover"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            }}
          />
        </div>

        <div className="container-site relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Smarter healthcare starts with <span className="text-gradient-brand">connected</span>{" "}
              health records.
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Connect your health records securely, receive personalized care recommendations, and
              discover clinical trial opportunities — all in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Lock className="h-4 w-4" /> Connect My Health Records
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Learn More <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-foreground/80">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> HIPAA Ready
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" /> Family Accounts
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" /> 24/7 Chat with Care Team
              </span>
            </div>

            {/* Contained image for mobile/tablet — full-bleed version takes over at lg+ */}
            <div className="relative mt-8 lg:hidden">
              <img
                src={heroHome.src}
                alt="Patient reviewing her connected health records on a smartphone"
                className="w-full rounded-2xl object-cover shadow-float"
              />
            </div>
          </div>

          {/* Right column — empty spacer that keeps the grid width; cards float over the full-bleed image */}
          <div className="relative hidden lg:block lg:h-[420px]">
            <div className="absolute -right-6 top-6 hidden w-56 rounded-xl border border-border bg-card p-4 shadow-card-soft xl:block">
              <p className="text-xs font-bold text-primary">Care Recommendation</p>
              <p className="mt-1 text-xs text-foreground">
                You may benefit from a Cardiology consultation
              </p>
              <p className="mt-1.5 text-xs font-semibold text-primary">View Details →</p>
            </div>

            <div className="absolute -right-8 top-[42%] hidden w-56 rounded-xl border border-border bg-card p-4 shadow-card-soft xl:block">
              <p className="text-xs font-bold text-success">Clinical Trial Match</p>
              <p className="mt-1 text-xs text-foreground">2 opportunities match your profile</p>
              <p className="mt-1.5 text-xs font-semibold text-primary">View Matches →</p>
            </div>

            <div className="absolute bottom-16 left-4 hidden max-w-[200px] items-center gap-2 rounded-xl border border-border bg-success-soft px-3 py-2 shadow-card-soft xl:flex">
              <Lock className="h-4 w-4 shrink-0 text-success" />
              <div>
                <p className="text-xs font-bold">Your data is secure</p>
                <p className="text-[10px] text-muted-foreground">
                  End-to-end encryption. You're in control.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden w-44 rounded-xl border border-border bg-card p-4 shadow-card-soft xl:block">
              <p className="text-xs font-semibold text-muted-foreground">Health Score</p>
              <p className="text-2xl font-extrabold text-success">
                92<span className="text-xs font-semibold text-muted-foreground"> of 100</span>
              </p>
              <p className="text-xs text-muted-foreground">Great job managing your health!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Actionable */}
      <section className="bg-card py-16">
        <div className="container-site text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Your health records become actionable.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Once you securely connect your health records, TrialCliniq uses clinical intelligence to
            help your care team identify opportunities for earlier referrals and, when appropriate,
            clinical trial participation.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {actionable.map((f) => (
              <div key={f.title} className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lavender-strong">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-bold">{f.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container-site rounded-3xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center text-2xl font-extrabold tracking-tight">
            How TrialCliniq works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <ChevronRight className="absolute -right-6 top-6 hidden h-5 w-5 text-border lg:block" />
                )}
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
        </div>
      </section>

      {/* Portal */}
      <section className="pb-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              The Patient Portal
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              A dashboard that feels like care.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Warm colors, clear insights, and everything you need — exactly when you need it.
            </p>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
              className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Open the Portal
            </Link>
          </div>

          <DashboardMock />
        </div>
      </section>

      {/* Privacy strip */}
      <section className="pb-16">
        <div className="container-site grid items-center gap-6 rounded-2xl bg-lavender-strong px-8 py-6 md:grid-cols-[auto_1fr]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
              <ShieldCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-sm font-extrabold leading-tight">
              Your Privacy
              <br />
              Comes First
            </p>
          </div>
          <div className="grid gap-4 text-xs text-foreground/80 sm:grid-cols-2 lg:grid-cols-5">
            {privacy.map((p) => (
              <p key={p} className="flex items-start gap-2">
                <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-card py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              About TrialCliniq
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Smarter Referrals.
              <br />
              Better Care.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              TrialCliniq securely connects to participating healthcare organizations through
              HealthEx and other FHIR-enabled EHRs to identify patients who may benefit from
              specialty care. Our clinical rules engine helps providers recognize referral
              opportunities earlier while also identifying eligible clinical trial candidates when
              appropriate.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-lavender"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {trust.map((t) => (
              <div key={t.title} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender">
                  <t.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 text-xs font-bold">{t.title}</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-16">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">FAQ</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Questions, answered.</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((q) => (
                <details key={q} className="group rounded-xl border border-border px-4 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                    {q}
                    <Plus className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">
                    TrialCliniq keeps you in control: your records stay private, encrypted, and only
                    shared with the care team members you approve. You can disconnect at any time.
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-cta p-8 text-primary-foreground lg:p-10">
            <div className="max-w-sm">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ready to take control of your health?
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/85">
                Connect your health records securely and unlock a smarter, more personalized
                healthcare experience.
              </p>
              <Link
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`}
                className="mt-6 inline-flex rounded-lg bg-card px-5 py-2.5 text-sm font-bold text-primary transition-transform hover:scale-105"
              >
                Get Started
              </Link>
              <p className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/85">
                <ShieldCheck className="h-4 w-4" /> Free to sign up. Always secure.
              </p>
            </div>
            <img
              src={ctaMan.src}
              alt="Smiling patient using the TrialCliniq portal on his phone"
              width={768}
              height={832}
              loading="lazy"
              className="pointer-events-none absolute -bottom-6 -right-4 hidden w-56 sm:block"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-float">
      <div className="grid sm:grid-cols-[170px_1fr]">
        <aside className="hidden border-r border-border bg-muted/50 p-4 sm:block">
          <p className="text-xs font-extrabold">✕ TrialCliniq</p>
          <ul className="mt-4 space-y-2 text-[11px] font-semibold text-muted-foreground">
            <li className="rounded-md bg-lavender-strong px-2 py-1.5 text-primary">Dashboard</li>
            {[
              "Recommendations",
              "Health Records",
              "Appointments",
              "Messages",
              "Medications",
              "Profile",
              "Settings",
            ].map((i) => (
              <li key={i} className="px-2 py-1.5">
                {i}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-5">
          <p className="text-sm font-extrabold">Welcome back, Ann Jacobs</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-border p-3">
              <p className="text-[10px] font-semibold text-muted-foreground">Next Appointment</p>
              <p className="mt-1 text-xs font-bold">Dr. Sarah Chen</p>
              <p className="text-[10px] text-muted-foreground">Cardiology · May 18 · 10:30 AM</p>
              <span className="mt-1.5 inline-block rounded-full bg-success-soft px-2 py-0.5 text-[9px] font-bold text-success">
                Confirmed
              </span>
            </div>
            <MetricCard label="Health Score" value="92" sub="of 100" tone="success" />
            <MetricCard label="Heart Rate" value="72" sub="bpm" tone="success" />
            <div className="rounded-xl border border-border p-3">
              <p className="text-[10px] font-semibold text-muted-foreground">Blood Pressure</p>
              <p className="mt-1 text-lg font-extrabold">
                118/76 <span className="text-[10px] font-semibold text-muted-foreground">mmHg</span>
              </p>
              <span className="mt-1.5 inline-block rounded-full bg-success-soft px-2 py-0.5 text-[9px] font-bold text-success">
                Normal
              </span>
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-3 sm:col-span-1">
              <p className="text-[10px] font-bold">Care Recommendations</p>
              <p className="mt-2 text-[10px] text-muted-foreground">
                You may benefit from a Cardiology consultation
              </p>
              <p className="mt-1.5 text-[10px] font-bold text-primary">View details →</p>
            </div>
            <div className="rounded-xl border border-border p-3">
              <p className="text-[10px] font-bold">Clinical Trial Matches</p>
              <p className="mt-2 text-[10px] text-muted-foreground">
                2 opportunities match your profile
              </p>
              <p className="mt-1.5 text-[10px] font-bold text-primary">View matches →</p>
            </div>
            <div className="rounded-xl border border-border p-3">
              <p className="text-[10px] font-bold">
                Medications{" "}
                <span className="font-normal text-muted-foreground">· 3 of 4 taken today</span>
              </p>
              <ul className="mt-2 space-y-1 text-[10px] text-muted-foreground">
                <li className="flex justify-between">
                  Metformin 500mg <span className="text-success">✓</span>
                </li>
                <li className="flex justify-between">
                  Lisinopril 10mg <span className="text-success">✓</span>
                </li>
                <li className="flex justify-between">
                  Atorvastatin 20mg <span>8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "success";
}) {
  return (
    <div className="rounded-xl border border-border p-3">
      <p className="text-[10px] font-semibold text-muted-foreground">{label}</p>
      <p className={`mt-1 text-lg font-extrabold ${tone === "success" ? "text-success" : ""}`}>
        {value} <span className="text-[10px] font-semibold text-muted-foreground">{sub}</span>
      </p>
      <svg viewBox="0 0 80 20" className="mt-1 h-5 w-full" aria-hidden="true">
        <path
          d="M0 15 L12 12 L24 14 L36 8 L48 11 L60 5 L72 8 L80 3"
          fill="none"
          stroke="oklch(0.62 0.15 160)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
