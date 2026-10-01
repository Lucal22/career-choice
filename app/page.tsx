"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { clearQuizState, loadQuizState } from "@/lib/quizState";

export default function Home() {
  const [hasSavedSession, setHasSavedSession] = useState(false);

  useEffect(() => {
    const saved = loadQuizState();
    if (saved && (saved.history.length > 0 || saved.result)) {
      setHasSavedSession(true);
    }
  }, []);

  const handleStartFresh = () => {
    clearQuizState();
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-indigo-500 selection:text-white">
      <Header />

      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-teal-500/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-xs dark:border-indigo-900/60 dark:bg-indigo-950/60 dark:text-indigo-300">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>Guia Vocacional para Estudantes de TI</span>
          </div>

          {/* Main Hero Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400">
                Escolha sua carreira
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-teal-300">
                na área de Tecnologia
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Descubra qual especialidade do universo da computação combina mais com o seu perfil através de uma árvore de decisão inteligente e interativa.
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/quiz"
              onClick={handleStartFresh}
              className="group relative flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-600/45 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{hasSavedSession ? "Iniciar Novo Teste" : "Iniciar"}</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            {hasSavedSession && (
              <Link
                href="/quiz"
                className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-800 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 active:scale-95"
              >
                <svg
                  className="h-4 w-4 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Continuar Sessão Anterior</span>
              </Link>
            )}
          </div>

          {/* Highlights / Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left">
            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-xs backdrop-blur-xs dark:border-zinc-800/80 dark:bg-zinc-900/60 transition-transform hover:-translate-y-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 mb-3">
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                12+ Trajetórias de TI
              </h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Frontend, Backend, IA, Cibersegurança, Dados, Gestão, UX/UI e muito mais.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-xs backdrop-blur-xs dark:border-zinc-800/80 dark:bg-zinc-900/60 transition-transform hover:-translate-y-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400 mb-3">
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
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Matérias da Graduação
              </h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Descubra quais disciplinas do seu curso universitário são fundamentais para cada área.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-xs backdrop-blur-xs dark:border-zinc-800/80 dark:bg-zinc-900/60 transition-transform hover:-translate-y-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400 mb-3">
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
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Roadmaps e Guias
              </h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Links diretos para trilhas de estudos consolidadas e reconhecidas pelo mercado.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <p>TechCareerPath &bull; Árvore de Decisão Vocacional em Tecnologia</p>
      </footer>
    </div>
  );
}
