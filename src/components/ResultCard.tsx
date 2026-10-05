"use client";

import { useState } from "react";
import Link from "next/link";
import { CareerResult } from "@/lib/types";
import { getSubjects, resolveRoadmapUrl } from "@/lib/quizState";

interface ResultCardProps {
  result: CareerResult;
  onRestart: () => void;
  historyLength: number;
}

export function ResultCard({
  result,
  onRestart,
  historyLength,
}: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const subjects = getSubjects(result);
  const roadmapUrl = resolveRoadmapUrl(result);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          `Descobri minha carreira ideal em TI: ${result.career}! Confira você também em: ${window.location.origin}`
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // ignore clipboard error
    }
  };

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/95 p-6 sm:p-10 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:shadow-indigo-950/20 transition-all">
      {/* Decorative ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 blur-3xl"
      />

      <div className="relative z-10 space-y-8">
        {/* Header result badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <svg
                className="h-4 w-4"
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
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Diagnóstico Concluído
            </span>
          </div>

          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {historyLength} decisões analisadas
          </span>
        </div>

        {/* Career Title & Intro */}
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            A carreira sugerida é:
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-200">
            {result.career}
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
            {result.description}
          </p>
        </div>

        {/* Subjects Section */}
        {subjects.length > 0 && (
          <div className="space-y-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 p-5 border border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>Disciplinas Relacionadas na Graduação</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {subjects.map((subj, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-xl bg-white dark:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-xs border border-zinc-200/80 dark:border-zinc-700/80 transition-transform hover:scale-105"
                >
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  {subj}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap Link Section */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Guia de Estudos e Carreira
          </div>
          <a
            href={roadmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/5 p-4 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-md hover:shadow-indigo-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
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
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Veja o roadmap de aprendizado
                </div>
                <div className="text-xs text-indigo-600 dark:text-indigo-400 underline truncate max-w-[240px] sm:max-w-md">
                  {roadmapUrl}
                </div>
              </div>
            </div>

            <svg
              className="h-5 w-5 text-indigo-500 group-hover:translate-x-1 transition-transform"
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
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={onRestart}
            type="button"
            className="flex h-12 w-full sm:flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-95 cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span>Refazer Questionário</span>
          </button>

          <button
            onClick={handleShare}
            type="button"
            className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-5 font-semibold text-zinc-800 transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 active:scale-95 cursor-pointer"
            title="Copiar resultado"
          >
            {copied ? (
              <>
                <svg
                  className="h-4 w-4 text-emerald-500"
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
                <span className="text-emerald-600 dark:text-emerald-400">Copiado!</span>
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                <span>Compartilhar</span>
              </>
            )}
          </button>

          <Link
            href="/"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-xl px-4 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}
