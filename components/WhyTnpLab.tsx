const featureCards = [
  {
    title: "Mentor-led coaching",
    description: "Get structured guidance from instructors and career mentors who help you stay focused on skills that matter in the real world.",
  },
  {
    title: "Project-first learning",
    description: "Move beyond theory with practical assignments, live mock interviews, and implementation work that mirrors professional expectations.",
  },
  {
    title: "Career support",
    description: "Build confidence with placement readiness, resume guidance, and a clear path from training to job opportunities.",
  },
];

export default function WhyTnpLab() {
  return (
    <section id="why" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-5">Why tnpLab</p>
          <h2 className="font-display text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold text-[#123B6D]">
            Professional mentoring with measurable outcomes.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-xl border border-[#0F2E59] bg-gradient-to-br from-[#123B6D] to-[#0F2E59] p-6 text-white shadow-[0_20px_50px_-30px_rgba(15,46,89,0.65)] sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#38BDF8]" />
                <span className="h-3 w-3 rounded-full bg-[#1976D2]" />
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-slate-100">
                Outcomes
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-[#0F2E59] p-5">
              <div className="flex items-end gap-4">
                <div className="flex flex-1 items-end justify-center gap-3">
                  <div className="w-14 rounded-t-lg bg-[#38BDF8]" style={{ height: "72px" }} />
                  <div className="w-14 rounded-t-lg bg-[#1976D2]" style={{ height: "120px" }} />
                  <div className="w-14 rounded-t-lg bg-white" style={{ height: "150px" }} />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Industry-led", "curriculum"],
                ["Hands-on", "projects"],
                ["Placement", "support"],
              ].map(([label, sub]) => (
                <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4">
                  <div className="text-xl font-bold text-white">{label}</div>
                  <div className="mt-1 text-sm text-slate-200">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {featureCards.map((card) => (
              <div key={card.title} className="soft-card border-l-4 border-l-[#38BDF8] p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-lg font-bold text-[#1976D2] ring-1 ring-sky-200">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-[#123B6D]">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

