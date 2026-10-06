"use client";

import { useState, FormEvent } from "react";

const topics = [
  "Full-Stack Web Development",
  "Data Analytics & Python",
  "Java + DSA",
  "Cloud & DevOps",
  "UI/UX Design",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    topic: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || !form.topic) {
      setError("Please fill in every field before submitting.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ""))) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[430px] flex-col items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 text-center text-[#172033] shadow-[0_24px_70px_-35px_rgba(15,46,89,0.45)]">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12.5L9.5 18L20 6" stroke="#1976D2" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#123B6D]">Request received</h3>
        <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
          A placement counselor will call {form.name.split(" ")[0]} within one business day to plan the {form.topic} track.
        </p>
        <button
          onClick={() => {
            setForm({ name: "", email: "", mobile: "", topic: "" });
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-[#172033] shadow-[0_24px_70px_-35px_rgba(15,46,89,0.45)] sm:p-7" noValidate>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#1976D2]">Consultation</p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-[#123B6D]">Let’s get you started</h3>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 ring-1 ring-blue-200">↗</div>
      </div>

      <div className="space-y-4">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input input-light"
          />
        </Field>

        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input input-light"
          />
        </Field>

        <Field label="Mobile" htmlFor="mobile">
          <input
            id="mobile"
            type="tel"
            placeholder="Enter mobile"
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            className="input input-light"
          />
        </Field>

        <Field label="Training topic" htmlFor="topic">
          <select
            id="topic"
            value={form.topic}
            onChange={(e) => update("topic", e.target.value)}
            className="input input-light appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%231d4ed8%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10"
          >
            <option value="" disabled>
              Select training topic
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-7 w-full">
        {status === "submitting" ? "Sending…" : "Contact Us"}
      </button>

      <p className="mt-4 text-center text-xs text-slate-500">No spam. We only call about your placement track.</p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}
