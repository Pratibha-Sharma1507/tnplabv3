const trainingTracks = [
  {
    title: "Frontend Development",
    badges: ["JS", "React", "CSS", "UI"],
    level: "Hindi + English",
    start: "Starting soon...",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React Js",
      "Redux",
      "Responsive Design",
      "API Integration",
      "Deployment",
    ],
    duration: "6 Months (Training + Project + 100% Job)",
    description: "Build responsive user interfaces and learn the complete frontend workflow from design to production deployment.",
    accent: "from-sky-50 to-white",
    badgeStyle: "bg-sky-50 text-[#123B6D]",
  },
  {
    title: "Backend Development",
    badges: ["Node", "API", "DB", "Cloud"],
    level: "Hindi + English",
    start: "Starting soon...",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "REST APIs",
      "Authentication",
      "Backend Logic",
      "Deployment",
    ],
    duration: "6 Months (Training + Project + 100% Job)",
    description: "Learn to design scalable systems with secure APIs, strong architecture, and production-ready deployment patterns.",
    accent: "from-sky-50 to-white",
    badgeStyle: "bg-sky-50 text-[#123B6D]",
  },
  {
    title: "Full Stack Developer",
    badges: ["AWS", "JS", "TS", "MongoDB"],
    level: "Hindi + English",
    start: "Starting soon...",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Project Work",
    ],
    duration: "6 Months (Training + Project + 100% Job)",
    description: "Master both client and server-side engineering to build complete end-to-end products with confidence.",
    accent: "from-sky-50 to-white",
    badgeStyle: "bg-sky-50 text-[#123B6D]",
  },
  {
    title: "DevOps Engineer",
    badges: ["AWS", "Linux", "Docker", "K8s"],
    level: "Hindi + English",
    start: "Starting soon...",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "AWS Cloud",
      "CI/CD",
      "Terraform",
      "Monitoring",
      "Automation",
    ],
    duration: "6 Months (Training + Project + 100% Job)",
    description: "Build expertise in deployment automation, infrastructure management, and cloud operations for live production systems.",
    accent: "from-sky-50 to-white",
    badgeStyle: "bg-sky-50 text-[#123B6D]",
  },
];

export default function TnpLabTraining() {
  return (
    <section className="relative px-4 pb-14 pt-16 sm:px-6 sm:pb-16 lg:px-8">
      <div className="section-shell">
        <div className="home-scroll-reveal mx-auto mb-10 max-w-3xl text-center">
          <p className="eyebrow mb-5">Programs</p>
          <h2 className="font-display text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold text-[#123B6D]">
            Career-focused learning tracks
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built for practical career outcomes, each pathway blends technical depth with hands-on delivery.
          </p>
        </div>

        <div className="home-scroll-reveal home-scroll-delay-1 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trainingTracks.map((track, index) => (
            <article key={track.title} className="soft-card group relative flex flex-col overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1976D2] to-[#38BDF8]" />
              <div className={`border-b border-[#E2E8F0] bg-gradient-to-r ${track.accent} px-4 pb-4 pt-6`}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123B6D] font-display text-sm font-bold text-white shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#1976D2]">Career track</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {track.badges.map((badge) => (
                    <span key={badge} className={`rounded-full border border-[#E2E8F0] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${track.badgeStyle}`}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-2xl font-bold text-[#123B6D] transition-colors group-hover:text-[#1976D2]">{track.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600">
                  <span className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1">{track.level}</span>
                  <span className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1">{track.start}</span>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                  {track.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-[#E2E8F0] pt-4 text-xs leading-6 text-slate-600">
                  <span className="font-semibold text-[#123B6D]">Duration:</span> {track.duration}
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-600">{track.description}</p>

                <button className="btn-secondary mt-auto w-full justify-center">Contact Us</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
