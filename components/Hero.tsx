import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section id="home" className="theme-hero relative overflow-hidden">
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="section-shell relative z-10 grid gap-10 pb-16 pt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-center lg:gap-16 lg:pb-20 lg:pt-16">
        <div className="max-w-2xl">
          <div className="eyebrow mb-7">
            <span className="mr-2 h-2 w-2 rounded-full bg-sky-400" />
            Training & Placement Lab
          </div>

          <h1 className="max-w-2xl font-display text-[clamp(3rem,5.2vw,5.25rem)] font-extrabold leading-[0.96] tracking-[-0.07em] text-white">
            Build a stronger,
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-sky-400 to-[#F8FAFC] bg-clip-text text-transparent">
              career-ready future.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-300">
            Comprehensive training, real-world projects, and placement support designed to turn learning into outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Book a free counseling call
            </a>
            <a href="#why" className="btn-secondary">
              See how it works
            </a>
          </div>

          <div className="mt-11 grid max-w-xl grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-5">
            <Stat value="4,200+" label="Engineers placed" />
            <Stat value="180+" label="Hiring partners" />
            <Stat value="92%" label="Placed in 90 days" />
          </div>
        </div>

        <div id="contact" className="relative z-10 scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 first:pl-0 last:pr-0 sm:px-5">
      <div className="font-display text-xl font-bold tracking-[-0.05em] text-white sm:text-2xl">{value}</div>
      <div className="mt-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-slate-300 sm:text-[0.68rem] sm:tracking-[0.16em]">{label}</div>
    </div>
  );
}
