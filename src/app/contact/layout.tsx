import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — We're Here to Help | TrialCliniq",
  description:
    "Whether you're a patient, provider, hospital, or research organization, our team is ready to answer your questions and help you get started with TrialCliniq.",
  openGraph: {
    title: "Contact TrialCliniq — We're Here to Help",
    description:
      "Patient support, sales & partnerships, and technical support — response within one business day.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
