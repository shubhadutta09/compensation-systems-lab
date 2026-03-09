import Link from "next/link";
import type { Route } from "next";
import ProjectCard from "@/components/ui/ProjectCard";

const featuredProjects = [
  {
    title: "The Psychology of Compensation",
    question: "Why does the same compensation package motivate different employees differently?",
    href: "/projects/psychology-compensation"
  },
  {
    title: "Performance and Pay",
    question: "How strongly does compensation reflect performance?",
    href: "/projects/performance-pay"
  },
  {
    title: "Pay Equity Analytics",
    question: "Do pay differences remain after controlling for job factors?",
    href: "/projects/pay-equity"
  }
] as const;

const themeCards = [
  {
    title: "Organizational Justice",
    body: "How distributive, procedural, and interactional fairness shape motivation and trust.",
    tone: "text-teal-900"
  },
  {
    title: "Labor Market Pricing",
    body: "How role supply-demand pressure should dynamically influence compensation strategy.",
    tone: "text-cyan-900"
  },
  {
    title: "Pay Equity and Transparency",
    body: "How to detect and reduce unexplained compensation disparities with controlled models.",
    tone: "text-blue-900"
  },
  {
    title: "Simulation and AI Planning",
    body: "How Monte Carlo and AI explanations support decision-ready compensation governance.",
    tone: "text-indigo-900"
  }
] as const;

const actionCards: { title: string; body: string; href: Route; cta: string }[] = [
  {
    title: "Interactive Tools",
    body: "Run the compensation package simulator, AI advisor, and budget Monte Carlo engine.",
    href: "/tools",
    cta: "Open Tools"
  },
  {
    title: "Experimental Studies",
    body: "Review conjoint evidence, pay pathing trajectories, and macro-pay sensitivity experiments.",
    href: "/experimental-studies",
    cta: "Explore Studies"
  },
  {
    title: "Labor Market Dashboard",
    body: "Analyze supply-demand scarcity, role pricing dynamics, and salary trend movement.",
    href: "/dashboard/labor-market-dashboard",
    cta: "Launch Dashboard"
  }
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="glass-card rounded-3xl p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-8">
            <div className="brand-chip inline-flex rounded-full px-3 py-1 text-xs font-semibold">
              OpenAI + Behavioral Science + Labor Economics
            </div>
            <h1 className="bg-gradient-to-r from-teal-800 via-cyan-700 to-blue-700 bg-clip-text text-5xl leading-tight text-transparent md:text-6xl">
              The Compensation Systems Lab
            </h1>
            <p className="max-w-3xl text-xl text-slate-700">
              Applied research on how compensation systems shape motivation, fairness, and organizational performance.
            </p>
            <p className="lead max-w-3xl">
              Compensation systems are one of the most powerful behavioral architectures inside organizations. This
              platform combines research, analytics, simulation, and AI explanation to design systems that are fair and
              strategically effective.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-gradient-to-r from-cyan-700 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Browse Projects
              </Link>
              <Link href="/tools" className="rounded-full border border-cyan-200 bg-white px-5 py-2.5 text-sm font-semibold text-cyan-900">
                Try Interactive Tools
              </Link>
            </div>
          </div>

          <aside className="grid gap-3 lg:col-span-4">
            <div className="glass-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Research Programs</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">5</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Experimental Studies</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">4</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Interactive Tools</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">3</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">AI Layer</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">OpenAI-powered advisor</p>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-3xl">Research Themes</h2>
          <Link href="/methods" className="text-sm font-semibold text-cyan-800">
            View Methods →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {themeCards.map((theme) => (
            <article key={theme.title} className="glass-card rounded-2xl p-6">
              <h3 className={`text-2xl ${theme.tone}`}>{theme.title}</h3>
              <p className="mt-2 text-slate-700">{theme.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-3xl">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-semibold text-cyan-800">
            See All Projects →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-3xl">Start Here</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {actionCards.map((card) => (
            <Link key={card.href} className="glass-card rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-cyan-200" href={card.href}>
              <h3 className="text-2xl">{card.title}</h3>
              <p className="mt-2 text-slate-700">{card.body}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-800">{card.cta} →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="glass-card rounded-3xl p-8 text-center">
        <h2 className="text-3xl">About The Lab</h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-700">
          This platform is built as a scientist-practitioner environment for compensation strategy, integrating
          behavioral theory, labor economics, and analytics engineering into decision-ready tools.
        </p>
        <Link href="/about" className="mt-5 inline-block rounded-full border border-cyan-200 bg-white px-5 py-2.5 text-sm font-semibold text-cyan-900">
          Learn More About Subhadra Dutta, PhD
        </Link>
      </section>
    </div>
  );
}
