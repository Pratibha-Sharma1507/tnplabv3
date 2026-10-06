import { NextRequest, NextResponse } from "next/server";

const ONECOMPILER_URL = "https://api.onecompiler.com/v1/run";

const languageConfig: Record<
  string,
  {
    language: string;
    filename: string;
  }
> = {
  javascript: {
    language: "javascript",
    filename: "main.js",
  },

  python: {
    language: "python",
    filename: "main.py",
  },

  cpp: {
    language: "cpp",
    filename: "main.cpp",
  },

  java: {
    language: "java",
    filename: "Main.java",
  },

  c: {
    language: "c",
    filename: "main.c",
  },
};

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.ONECOMPILER_API_KEY;

    if (!apiKey) {
      console.error("ONECOMPILER_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          error: "OneCompiler API key is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      language,
      code,
      stdin = "",
    }: {
      language?: string;
      code?: string;
      stdin?: string;
    } = body;

    // -----------------------------
    // Validation
    // -----------------------------

    if (!language || typeof language !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Language is required.",
        },
        { status: 400 }
      );
    }

    if (typeof code !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Code must be a string.",
        },
        { status: 400 }
      );
    }

    if (typeof stdin !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "STDIN must be a string.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Language check
    // -----------------------------

    const selectedLanguage = languageConfig[language];

    if (!selectedLanguage) {
      return NextResponse.json(
        {
          success: false,
          error: `Unsupported language: ${language}`,
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Call OneCompiler
    // -----------------------------

    const response = await fetch(ONECOMPILER_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },

      body: JSON.stringify({
        language: selectedLanguage.language,

        stdin,

        files: [
          {
            name: selectedLanguage.filename,
            content: code,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("OneCompiler Response:", data);

    // -----------------------------
    // API error
    // -----------------------------

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            data?.error ||
            data?.message ||
            "OneCompiler API request failed.",
        },
        {
          status: response.status,
        }
      );
    }

    // -----------------------------
    // Execution result
    // -----------------------------

    return NextResponse.json({
      success: true,

      stdout: data?.stdout ?? "",

      stderr: data?.stderr ?? "",

      exception: data?.exception ?? null,

      status: data?.status ?? null,

      compilationTime: data?.compilationTime ?? 0,

      executionTime: data?.executionTime ?? 0,

      memoryUsed: data?.memoryUsed ?? 0,
    });
  } catch (error) {
    console.error("Compiler API Error:", error);

    return NextResponse.json(
      {
        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Unable to execute code.",
      },
      { status: 500 }
    );
  }
}