"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const starterCode: Record<string, string> = {
  javascript: `console.log("Hello, tnpLab!");

const sum = (a, b) => a + b;

console.log("Sum:", sum(12, 18));`,

  python: `print("Hello, tnpLab!")

for i in range(3):
    print("Loop:", i)`,

  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, tnpLab!" << endl;
    
    int a = 12;
    int b = 18;
    
    cout << "Sum: " << a + b << endl;

    return 0;
}`,

  java: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, tnpLab!");

        int a = 12;
        int b = 18;

        System.out.println("Sum: " + (a + b));
    }
}`,

  c: `#include <stdio.h>

int main() {

    printf("Hello, tnpLab!\\n");

    int a = 12;
    int b = 18;

    printf("Sum: %d\\n", a + b);

    return 0;
}`,
};

const languageOptions = [
  {
    value: "javascript",
    label: "JavaScript",
  },
  {
    value: "python",
    label: "Python",
  },
  {
    value: "cpp",
    label: "C++",
  },
  {
    value: "java",
    label: "Java",
  },
  {
    value: "c",
    label: "C",
  },
];

export default function CompilerPage() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(starterCode.javascript);

  const [stdin, setStdin] = useState("");

  const [output, setOutput] = useState(
    "Output will appear here..."
  );

  const [error, setError] = useState("");

  const [isRunning, setIsRunning] = useState(false);

  const [executionTime, setExecutionTime] = useState<number | null>(
    null
  );

  const [memoryUsed, setMemoryUsed] = useState<number | null>(
    null
  );

  const currentLanguageLabel = useMemo(() => {
    return (
      languageOptions.find(
        (item) => item.value === language
      )?.label ?? "JavaScript"
    );
  }, [language]);

  // --------------------------------
  // Language Change
  // --------------------------------

  const handleLanguageChange = (
    nextLanguage: string
  ) => {
    setLanguage(nextLanguage);

    setCode(
      starterCode[nextLanguage] ??
        starterCode.javascript
    );

    setOutput("Output will appear here...");

    setError("");

    setStdin("");

    setExecutionTime(null);

    setMemoryUsed(null);
  };

  // --------------------------------
  // Run Code
  // --------------------------------

  const runCode = async () => {
    if (!code.trim()) {
      setError("Please enter some code.");

      setOutput("");

      return;
    }

    setIsRunning(true);

    setError("");

    setOutput("Running...");

    setExecutionTime(null);

    setMemoryUsed(null);

    try {
      const response = await fetch("/api/compile", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          language,
          code,
          stdin,
        }),
      });

      const data = await response.json();

      // -----------------------------
      // Backend/API error
      // -----------------------------

      if (!response.ok || !data.success) {
        setOutput("");

        setError(
          data?.error ||
            "Unable to execute code."
        );

        return;
      }

      // -----------------------------
      // Execution information
      // -----------------------------

      setExecutionTime(
        typeof data.executionTime === "number"
          ? data.executionTime
          : null
      );

      setMemoryUsed(
        typeof data.memoryUsed === "number"
          ? data.memoryUsed
          : null
      );

      // -----------------------------
      // Runtime exception
      // -----------------------------

      if (data.exception) {
        setOutput("");

        setError(data.exception);

        return;
      }

      // -----------------------------
      // stderr
      // -----------------------------

      if (data.stderr) {
        setOutput(data.stderr);

        return;
      }

      // -----------------------------
      // stdout
      // -----------------------------

      if (data.stdout) {
        setOutput(data.stdout);

        return;
      }

      // -----------------------------
      // No output
      // -----------------------------

      setOutput(
        "Code executed successfully with no output."
      );
    } catch (error) {
      console.error(error);

      setOutput("");

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while running the code."
      );
    } finally {
      setIsRunning(false);
    }
  };

  // --------------------------------
  // Clear Output
  // --------------------------------

  const clearOutput = () => {
    setOutput("Output will appear here...");

    setError("");

    setExecutionTime(null);

    setMemoryUsed(null);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#172033]">
      <div className="section-shell py-8 lg:py-10">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="btn-secondary w-fit">
            ← Back to home
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="text-sm font-semibold text-[#123B6D]">Language</label>
            <select
              value={language}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#172033] outline-none transition focus:border-[#1976D2]"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <button type="button" onClick={runCode} disabled={isRunning} className="btn-primary">
              {isRunning ? "Running..." : "Run Code"}
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_24px_60px_-36px_rgba(15,46,89,0.45)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#0F2E59] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-200">
              {currentLanguageLabel} editor
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <textarea
                value={code}
                onChange={(event) => setCode(event.target.value)}
                spellCheck={false}
                className="min-h-[420px] w-full resize-none border-0 bg-[#0F2E59] p-5 font-mono text-sm leading-7 text-[#F8FAFC] outline-none"
              />

              <div className="border-t border-white/10 bg-[#0F2E59] p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-200">Input / STDIN</h3>
                </div>

                <textarea
                  value={stdin}
                  onChange={(event) => setStdin(event.target.value)}
                  placeholder="Enter input for your program..."
                  spellCheck={false}
                  className="min-h-[110px] w-full resize-y rounded-lg border border-white/20 bg-[#123B6D] p-4 font-mono text-sm text-white outline-none placeholder:text-slate-300 focus:border-[#38BDF8]"
                />
              </div>
            </div>

            <div className="border-t border-[#E2E8F0] bg-white p-5 lg:border-l lg:border-t-0">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#123B6D]">Output</h2>
                <button type="button" onClick={clearOutput} className="rounded-lg border border-[#E2E8F0] px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-[#38BDF8] hover:text-[#123B6D]">
                  Clear
                </button>
              </div>

              <pre className={`min-h-[340px] whitespace-pre-wrap rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 font-mono text-sm leading-7 ${error ? "text-red-700" : "text-[#123B6D]"}`}>
                {error || output}
              </pre>

              {(executionTime !== null || memoryUsed !== null) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {executionTime !== null && (
                    <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2">
                      <span className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">Execution</span>
                      <div className="text-sm font-semibold text-[#123B6D]">{executionTime} ms</div>
                    </div>
                  )}

                  {memoryUsed !== null && (
                    <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2">
                      <span className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">Memory</span>
                      <div className="text-sm font-semibold text-[#123B6D]">{memoryUsed} KB</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}