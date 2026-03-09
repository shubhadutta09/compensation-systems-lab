export default function Footer() {
  return (
    <footer className="mt-20 border-t border-cyan-100 bg-gradient-to-r from-white to-cyan-50">
      <div className="mx-auto grid max-w-7xl gap-3 px-6 py-8 text-sm text-slate-700 md:grid-cols-5">
        <div>
          <p className="font-semibold text-slate-900">About</p>
          <p>Subhadra Dutta, PhD</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Research Themes</p>
          <p>Behavioral science, labor economics, analytics</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p>research@compensationlab.org</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">LinkedIn</p>
          <p>linkedin.com/in/subhadradutta</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">AI Platform</p>
          <p>Powered by OpenAI API</p>
        </div>
      </div>
    </footer>
  );
}
