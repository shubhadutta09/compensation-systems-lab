import Link from "next/link";
import type { Route } from "next";

export default function ProjectCard({
  title,
  question,
  href
}: {
  title: string;
  question: string;
  href: string;
}) {
  return (
    <article className="glass-card rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-cyan-200">
      <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-700">{question}</p>
      <Link href={href as Route} className="mt-4 inline-block text-sm font-semibold text-cyan-800">
        Explore project →
      </Link>
    </article>
  );
}
