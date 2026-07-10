import type { Metadata } from "next";
import Link from "next/link";
import {
  Network,
  Bell,
  UsersRound,
  Lock,
  ChevronRight,
  LayoutDashboard,
  ShieldCheck,
  Users,
  Share2,
  Zap,
  Heart,
  Building2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroAbout from "@/assets/hero-about.jpg";
import tabletHands from "@/assets/tablet-hands.jpg";

export const metadata: Metadata = {
  title: "About — Smarter Referrals for Community Care | TrialCliniq",
  description:
    "TrialCliniq links community clinics, labs, and hospital networks together using TEFCA-compliant QHIN health information networks to match patients to trials and specialist care.",
  openGraph: {
    title: "About TrialCliniq — Smarter Referrals for Community Care",
    description:
      "Connecting communities, providers, and clinical opportunities through secure, intelligent technology.",
  },
};

const values = [
  {
    icon: Users,
    title: "Patient-Centered",
    text: "We empower patients and improve access to specialist care and clinical trials.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    text: "Privacy and compliance are built into everything we do.",
  },
  {
    icon: Share2,
    title: "Connected Care",
    text: "Our platform brings together communities, providers, and health systems.",
  },
  {
    icon: Zap,
    title: "Real-Time Insights",
    text: "Timely data. Smarter decisions. Better outcomes.",
  },
  {
    icon: Heart,
    title: "Better Outcomes",
    text: "Earlier interventions and trial access lead to better health for all.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white text-black">
        <img
          src={heroAbout.src}
          alt="Clinician monitoring neurological and cardiovascular telemetry"
          width={1024}
          height={768}
          className="absolute inset-y-0 right-0 h-full w-[50%] object-cover opacity-90"
        />
        <div className="absolute inset-y-0 right-0 w-[50%] bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="container-site relative py-20 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Community Referrals &amp; Specialist Tracking
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-black">
            Smarter Referrals for{" "}
            <span className="text-gradient-brand brightness-150">Community Care</span>.
          </h1>
          <p className="mt-5 max-w-lg text-sm text-slate-700">
            TrialCliniq links community clinics, diagnostic laboratories, and hospital networks
            together. Using TEFCA-compliant QHIN health information networks, our software analyzes
            telemetry records to match patients to clinical trials and alert coordinators when
            specialist care is needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Enter Patient Portal <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/30 bg-navy-foreground/10 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-navy-foreground/20"
            >
              Request a Consultation <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 inline-flex items-center gap-3 rounded-xl bg-card px-4 py-3 text-foreground shadow-card-soft">
            <Lock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-bold">Secure. Compliant. Connected.</p>
              <p className="text-[11px] text-muted-foreground">
                Built on TEFCA and HIPAA standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-16">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-strong">
                <Network className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold">TEFCA Network Ingestion</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Connects through major national QHIN gateways to ingest patient files securely and
                  match profiles without violating strict HIPAA or SOC2 rules.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center rounded-xl bg-lavender p-8">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-center text-[10px] font-extrabold leading-tight text-primary-foreground shadow-float">
                  TEFCA
                  <br />
                  QHIN
                </div>
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`absolute flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card shadow-card-soft ${
                      [
                        "-left-14 -top-6",
                        "-right-14 -top-6",
                        "-left-14 -bottom-6",
                        "-right-14 -bottom-6",
                      ][i]
                    }`}
                  >
                    <Building2 className="h-4 w-4 text-primary" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-strong">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold">Coordinated Specialist Routing</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Flags critical anomalies in neurological and cardiovascular telemetry, dispatching
                  urgent notifications to community care coordinators.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold">Critical Alert</p>
                <span className="rounded-full bg-danger-soft px-2 py-0.5 text-[10px] font-bold text-destructive">
                  High Priority
                </span>
              </div>
              <p className="mt-2 text-xs font-bold">Possible Atrial Fibrillation Detected</p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Patient ID: 2647-AC
                <br />
                Time: 10:42 AM
              </p>
              <button className="mt-3 rounded-lg bg-primary px-3 py-2 text-[11px] font-bold text-primary-foreground">
                Notify Care Coordinator
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-strong">
                <UsersRound className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold">Active Trial Matchmaking</h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Matches qualified community patients directly to active clinical trials, boosting
                  local clinical enrollment and expanding access to new treatments.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold">Trial Match Found</p>
                <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-bold text-success">
                  94% Match
                </span>
              </div>
              <div className="mt-3 flex items-start gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lavender-strong">
                  <UsersRound className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="text-xs font-bold">Neuro Restore Study</p>
                  <p className="text-[11px] text-muted-foreground">
                    Phase II · Recruiting
                    <br />
                    Location: City Medical Center
                  </p>
                </div>
              </div>
              <button className="mt-3 rounded-lg border border-primary px-3 py-2 text-[11px] font-bold text-primary">
                View Trial Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Loved by patients */}
      <section className="relative overflow-hidden bg-card py-16">
        {/* Full-bleed photo, fades in from the left */}
        <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
          <img
            src={tabletHands.src}
            alt="Hands holding a tablet showing the TrialCliniq clinical dashboard"
            className="h-full w-full object-cover"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            }}
          />
        </div>

        <div className="container-site relative grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Designed for clinical speed.
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Loved by <span className="text-gradient-brand">patients</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Traditional portals are built for billing. TrialCliniq is built around care. We
              coordinate with providers to assemble an intuitive, simple view of medical history,
              prescriptions, and trial statuses that makes clinical documentation digestible.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  icon: LayoutDashboard,
                  title: "Full medical diagnostics dashboard",
                  text: "Real-time telemetry, labs, and vitals in one view.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure EHR integration for local clinics",
                  text: "Seamless connections with leading EHR systems.",
                },
                {
                  icon: Lock,
                  title: "HIPAA-compliant data routing",
                  text: "End-to-end encryption with role-based access.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lavender-strong">
                    <item.icon className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Contained image for mobile/tablet — full-bleed version takes over at lg+ */}
            <div className="relative mt-8 lg:hidden">
              <img
                src={tabletHands.src}
                alt="Hands holding a tablet showing the TrialCliniq clinical dashboard"
                className="w-full rounded-2xl object-cover shadow-float"
              />
            </div>
          </div>

          {/* Empty spacer — keeps grid width so the photo shows through on the right */}
          <div aria-hidden className="hidden lg:block" />
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-site grid gap-8 rounded-3xl border border-border bg-card p-8 sm:grid-cols-3 lg:grid-cols-5 lg:p-12">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lavender">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 text-sm font-bold">{v.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
