import Image from "next/image";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Image
      src="/trialcliniq-logo.png"
      alt="TrialCliniq"
      width={160}
      height={32}
      className={`${className} w-auto`}
      priority
    />
  );
}
