import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} — página inicial`} className={`inline-flex items-center ${className}`}>
      {site.logo ? (
        <Image
          src={site.logo.src}
          width={site.logo.width}
          height={site.logo.height}
          alt={site.name}
          priority
          className="h-11 w-auto"
        />
      ) : (
        <span className="font-display text-xl font-semibold leading-none text-ink sm:text-2xl">{site.name}</span>
      )}
    </Link>
  );
}
