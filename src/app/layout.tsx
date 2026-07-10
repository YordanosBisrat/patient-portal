import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrialCliniq — Connected Health Records & Clinical Trials",
  description:
    "The modern patient portal for smarter, more connected healthcare. Connect records, get care recommendations, and discover clinical trials.",
  authors: [{ name: "TrialCliniq Health" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TrialCliniq — Connected Health Records & Clinical Trials",
    description: "The modern patient portal for smarter, more connected healthcare.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
