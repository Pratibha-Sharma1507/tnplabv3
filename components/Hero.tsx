import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section id="home" className="theme-hero relative overflow-hidden">
      <div className="grain-overlay pointer-events-none absolute inset-0" />
      <div className="hero-blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="section-shell relative z-10 grid gap-9 pb-14 pt-10 sm:gap-10 sm:pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="max-w-2xl">
          <div className="eyebrow home-enter mb-6">
            <span className="mr-2 h-2 w-2 rounded-full bg-sky-400" />
            Training & Placement Lab
          </div>

          <h1 className="max-w-2xl font-display text-[clamp(2.65rem,4.6vw,4.65rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white">
            <span className="hero-title-line">Build a stronger,</span>
            <span className="hero-title-line hero-title-line-delay mt-1 block bg-gradient-to-r from-sky-200 via-sky-300 to-[#F8FAFC] bg-clip-text text-transparent">
              career-ready future.
            </span>
          </h1>

          <p className="home-enter home-enter-delay-2 mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Comprehensive training, real-world projects, and placement support designed to turn learning into outcomes.
          </p>

          <div className="home-enter home-enter-delay-3 mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary">
              Book a free counseling call
            </a>
            <a href="#why" className="btn-secondary">
              See how it works
            </a>
          </div>

          <div className="home-enter home-enter-delay-4 mt-9 grid max-w-xl grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-5 sm:mt-11 sm:py-6">
            <Stat value="4,200+" label="Engineers placed" />
            <Stat value="180+" label="Hiring partners" />
            <Stat value="92%" label="Placed in 90 days" />
          </div>
        </div>

        <div id="contact" className="hero-form-enter relative z-10 scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 first:pl-0 last:pr-0 sm:px-5">
      <div className="font-display text-2xl font-semibold leading-none tracking-[-0.035em] text-white sm:text-3xl">{value}</div>
      <div className="mt-2 max-w-[9rem] text-[0.58rem] font-medium uppercase leading-4 tracking-[0.1em] text-slate-200 sm:text-[0.68rem] sm:leading-5 sm:tracking-[0.14em]">{label}</div>
    </div>
  );
}
