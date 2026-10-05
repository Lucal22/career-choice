"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearQuizState } from "@/lib/quizState";

interface HeaderProps {
  showReset?: boolean;
  onReset?: () => void;
}

export function Header({ showReset = false, onReset }: HeaderProps) {
  const router = useRouter();

  const handleRestart = () => {
    if (onReset) {
      onReset();
    } else {
      clearQuizState();
      router.push("/quiz");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform active:scale-95"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              TechCareer<span className="text-indigo-600 dark:text-indigo-400">Path</span>
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-none">
              Árvore de Decisão
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {showReset && (
            <button
              onClick={handleRestart}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-xs transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 active:scale-95"
              title="Recomeçar questionário do início"
            >
              <svg
                className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Recomeçar
            </button>
          )}

          <Link
            href="/"
            className="text-xs font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
          >
            Início
          </Link>
        </div>
      </div>
    </header>
  );
}
