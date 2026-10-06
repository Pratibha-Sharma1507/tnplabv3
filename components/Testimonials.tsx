const testimonials = [
  {
    name: "Surjeet Raj",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "tnpLab provided the right mix of guided mentorship, practical projects, and placement support. The environment was focused, encouraging, and directly aligned with what hiring teams expect.",
    badge: "Placed in 2024",
  },
  {
    name: "Nikita Shah",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "The training felt structured and career-oriented from day one. I gained clarity on the stack, improved my confidence, and connected with real interview practices that made a measurable difference.",
    badge: "Placed in 2024",
  },
  {
    name: "Deepak Singh",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    text: "A practical course that balances theory with implementation. The support system helped me move from learning to building, and that made the transition into interviews much smoother.",
    badge: "Placed in 2024",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">Success stories</p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] font-extrabold text-[#123B6D]">
            What students are saying
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="soft-card group relative flex min-h-[380px] flex-col justify-between overflow-hidden p-6">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1976D2] to-[#38BDF8]" />
              <div>
                <div className="mb-6 flex items-center gap-4 pt-1">
                  <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-[#38BDF8]/50" />
                  <div>
                    <div className="text-lg font-bold text-[#123B6D] transition-colors group-hover:text-[#1976D2]">{item.name}</div>
                    <div className="mt-0.5 text-sm text-slate-600">{item.role}</div>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#1976D2]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span aria-hidden="true" className="font-display text-5xl leading-none text-sky-200">“</span>
                </div>

                <p className="border-l-2 border-[#38BDF8] pl-4 text-[15px] leading-7 text-slate-700">“{item.text}”</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#E2E8F0] pt-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Career outcome</span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#123B6D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1976D2]" />
                  {item.badge}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl bg-[#0F2E59] px-5 py-5 text-center text-white md:flex-row md:text-left">
          <p className="text-xl font-medium text-white">
            Join the <span className="text-[#38BDF8]">tnpLab</span> training experience and take the next step.
          </p>
          <button className="btn-primary">Join Now</button>
        </div>
      </div>
    </section>
  );
}

