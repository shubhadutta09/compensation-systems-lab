import Link from "next/link";
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
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="glass-card space-y-4 rounded-3xl p-8">
        <div className="brand-chip inline-flex rounded-full px-3 py-1 text-xs font-semibold">OpenAI + Behavioral Economics Research</div>
        <h1 className="bg-gradient-to-r from-teal-800 via-cyan-700 to-blue-700 bg-clip-text text-5xl text-transparent">
          The Compensation Systems Lab
        </h1>
        <p className="text-xl text-slate-700">
          Applied research on how compensation systems shape motivation, fairness, and organizational performance.
        </p>
        <p className="lead max-w-4xl">
          Compensation systems are one of the most powerful behavioral architectures inside organizations. They shape
          motivation, fairness perceptions, collaboration, and long-term talent strategy.
        </p>
        <p className="lead max-w-4xl">
          This research portfolio explores compensation through behavioral science, labor economics, and analytics with
          the goal of designing systems that are both fair and strategically effective.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl">Research Themes</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-5 text-teal-900">Organizational justice and motivation</div>
          <div className="glass-card rounded-2xl p-5 text-cyan-900">Labor market intelligence and pricing</div>
          <div className="glass-card rounded-2xl p-5 text-blue-900">Pay equity and transparency</div>
          <div className="glass-card rounded-2xl p-5 text-indigo-900">Simulation and AI-assisted planning</div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl">Featured Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link className="glass-card rounded-2xl p-6 transition hover:-translate-y-0.5" href="/tools/compensation-simulator">
          <h3 className="text-2xl">Interactive Tools</h3>
          <p className="mt-2 text-slate-700">Compensation simulator, AI advisor, and budget Monte Carlo model.</p>
        </Link>
        <Link className="glass-card rounded-2xl p-6 transition hover:-translate-y-0.5" href="/experimental-studies/conjoint-study">
          <h3 className="text-2xl">Experimental Studies</h3>
          <p className="mt-2 text-slate-700">Conjoint studies, pay pathing, talent-pay matrix, and macro insights.</p>
        </Link>
        <Link className="glass-card rounded-2xl p-6 transition hover:-translate-y-0.5" href="/about">
          <h3 className="text-2xl">About</h3>
          <p className="mt-2 text-slate-700">Subhadra Dutta, PhD and the scientific approach behind this lab.</p>
        </Link>
      </section>
    </div>
  );
}
