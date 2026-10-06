import Link from "next/link";

const trainingTracks = [
  {
    title: "Frontend Development",
    badge: "React / JS / UI",
    description:
      "Build fast, responsive interfaces and deploy polished web experiences by mastering modern frontend workflows.",
    points: [
      "HTML, CSS & JavaScript",
      "React & TypeScript",
      "Responsive UI Design",
      "State Management",
      "REST API Integration",
      "Deployment & Optimization",
    ],
    accent: "from-sky-50 to-white",
  },
  {
    title: "Backend Development",
    badge: "Node / APIs / DB",
    description:
      "Create secure, scalable backend systems with strong database design, APIs, and production-ready architecture.",
    points: [
      "Node.js & Express",
      "RESTful API Design",
      "MongoDB & SQL",
      "Authentication & Security",
      "Backend Architecture",
      "Deployment & Monitoring",
    ],
    accent: "from-sky-50 to-white",
  },
];

export default function WhyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#172033]">
      <div className="section-shell py-8 lg:py-10">
        <div className="mb-8">
          <Link href="/" className="btn-secondary w-fit">
            ← Back to Home
          </Link>
        </div>

        <div className="mb-10 text-center">
          <p className="eyebrow mb-4">Why tnpLab</p>
          <h1 className="font-display text-[clamp(2.3rem,5vw,4.2rem)] font-extrabold text-[#123B6D]">
            Professional training that drives outcomes.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {trainingTracks.map((track) => (
            <div key={track.title} className={`soft-card overflow-hidden bg-gradient-to-br ${track.accent}`}>
              <div className="border-b border-[#E2E8F0] px-6 py-5">
                <div className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#123B6D]">
                  {track.badge}
                </div>
                <h2 className="text-3xl font-bold text-[#123B6D]">{track.title}</h2>
              </div>

              <div className="p-6">
                <p className="mb-5 text-base leading-relaxed text-slate-600">{track.description}</p>

                <ul className="space-y-3 text-base text-slate-700">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#38BDF8]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-primary mt-7 w-full">Contact Us</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
