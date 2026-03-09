"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experimental Studies", "/experimental-studies"],
  ["Interactive Tools", "/tools"],
  ["Labor Market Dashboard", "/dashboard/labor-market-dashboard"],
  ["Research Repository", "/research-repository"],
  ["Methods", "/methods"],
  ["Future of Compensation Systems", "/future-of-compensation-systems"],
  ["About", "/about"]
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="text-xl font-semibold tracking-tight text-slate-900">The Compensation Systems Lab</div>
          <div className="brand-chip rounded-full px-3 py-1 text-xs font-semibold">Powered by OpenAI API</div>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm">
          {nav.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3 py-1.5 transition ${
                  active
                    ? "bg-gradient-to-r from-cyan-700 to-blue-700 text-white"
                    : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
