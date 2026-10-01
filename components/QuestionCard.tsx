"use client";

import { useEffect } from "react";
import { QuestionNode } from "@/lib/types";

interface QuestionCardProps {
  questionNode: QuestionNode;
  onAnswer: (choice: "sim" | "nao") => void;
  stepNumber: number;
}

export function QuestionCard({
  questionNode,
  onAnswer,
  stepNumber,
}: QuestionCardProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when user is typing in inputs or textarea
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === "s" || e.key === "S" || e.key === "1") {
        e.preventDefault();
        onAnswer("sim");
      } else if (e.key === "n" || e.key === "N" || e.key === "2") {
        e.preventDefault();
        onAnswer("nao");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onAnswer]);

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/90 p-6 sm:p-10 shadow-xl shadow-zinc-950/5 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:shadow-black/40 transition-all">
      {/* Decorative ambient gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20"
      />

      <div className="relative z-10 space-y-8">
        {/* Node identifier badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            Pergunta #{stepNumber}
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            {questionNode.id}
          </span>
        </div>

        {/* Question Text */}
        <div className="min-h-[90px] flex items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug sm:leading-relaxed">
            {questionNode.question}
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* SIM Button */}
          <button
            onClick={() => onAnswer("sim")}
            type="button"
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-4 sm:p-5 text-left text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">SIM</div>
                <div className="text-xs text-emerald-100 font-medium">
                  Tenho interesse
                </div>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center justify-center rounded-md bg-white/20 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-100 opacity-80 group-hover:opacity-100">
              [S]
            </span>
          </button>

          {/* NÃO Button */}
          <button
            onClick={() => onAnswer("nao")}
            type="button"
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-800/80 p-4 sm:p-5 text-left text-zinc-900 dark:text-zinc-100 shadow-md shadow-zinc-900/5 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-200/70 dark:hover:bg-zinc-750 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-zinc-400/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200/80 dark:bg-zinc-700/80 text-zinc-700 dark:text-zinc-300">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">NÃO</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  Prefiro outro caminho
                </div>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center justify-center rounded-md bg-zinc-200/80 dark:bg-zinc-700 px-2 py-0.5 font-mono text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 opacity-80 group-hover:opacity-100">
              [N]
            </span>
          </button>
        </div>

        {/* Keyboard hint info */}
        <div className="text-center pt-1">
          <p className="text-[12px] text-zinc-400 dark:text-zinc-500">
            Dica: você pode usar as teclas <kbd className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] border border-zinc-200 dark:border-zinc-700">S</kbd> / <kbd className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] border border-zinc-200 dark:border-zinc-700">1</kbd> para Sim e <kbd className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] border border-zinc-200 dark:border-zinc-700">N</kbd> / <kbd className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] border border-zinc-200 dark:border-zinc-700">2</kbd> para Não.
          </p>
        </div>
      </div>
    </div>
  );
}
