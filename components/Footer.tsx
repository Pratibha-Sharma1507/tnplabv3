export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F2E59] text-white">
      <div className="section-shell py-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#38BDF8]">Location</p>
            <p className="mt-4 max-w-xs text-base leading-7 text-slate-300">
              Kolar Road Near Danish Kunj, Bhopal, M.P. 462042, India
            </p>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#38BDF8]">Office</p>
            <p className="mt-4 max-w-xs text-base leading-7 text-slate-300">
              Second Floor, Plot No. 194/1, In Front of Canara Bank, Bhadbhada Road, Bhopal, M.P. 462044, India
            </p>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#38BDF8]">Follow us</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-slate-200 transition hover:border-sky-300/30 hover:text-white">f</a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-slate-200 transition hover:border-sky-300/30 hover:text-white">in</a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-slate-200 transition hover:border-sky-300/30 hover:text-white">◎</a>
            </div>

            <p className="mt-5 text-base text-slate-300">
              Email: <a href="mailto:vinay@tnplab.in" className="text-[#38BDF8] hover:text-white">vinay@tnplab.in</a>
            </p>
            <p className="mt-2 text-base text-slate-300">
              Call: <a href="tel:+919244107733" className="text-[#38BDF8] hover:text-white">+91 9244107733</a>
            </p>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-slate-400">
          Copyright © 2023 tnpLab.in (Training and Placement Lab). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
