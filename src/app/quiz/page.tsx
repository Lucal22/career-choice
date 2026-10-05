"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultCard } from "@/components/ResultCard";
import { questions, INITIAL_QUESTION_ID } from "@/data/questions";
import {
  CareerResult,
  isCareerResult,
  isNextBranch,
  QuizHistoryEntry,
  QuizSessionState,
} from "@/lib/types";
import {
  clearQuizState,
  getDefaultState,
  loadQuizState,
  saveQuizState,
} from "@/lib/quizState";

export default function QuizPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(INITIAL_QUESTION_ID);
  const [history, setHistory] = useState<QuizHistoryEntry[]>([]);
  const [result, setResult] = useState<CareerResult | null>(null);

  // Hydrate state from sessionStorage on mount
  useEffect(() => {
    const saved = loadQuizState();
    if (saved) {
      setCurrentNodeId(saved.currentNodeId);
      setHistory(saved.history || []);
      setResult(saved.result || null);
    }
    setIsHydrated(true);
  }, []);

  // Update sessionStorage whenever state changes
  const persistState = (
    newNodeId: string | null,
    newHistory: QuizHistoryEntry[],
    newResult: CareerResult | null
  ) => {
    const state: QuizSessionState = {
      currentNodeId: newNodeId,
      history: newHistory,
      result: newResult,
    };
    saveQuizState(state);
  };

  const handleAnswer = (choice: "sim" | "nao") => {
    if (!currentNodeId) return;
    const currentNode = questions[currentNodeId];
    if (!currentNode) return;

    const branch = currentNode[choice];
    const newHistory: QuizHistoryEntry[] = [
      ...history,
      { nodeId: currentNodeId, choice },
    ];

    if (isCareerResult(branch)) {
      setResult(branch);
      setCurrentNodeId(null);
      setHistory(newHistory);
      persistState(null, newHistory, branch);
    } else if (isNextBranch(branch)) {
      const nextId = branch.next;
      setCurrentNodeId(nextId);
      setHistory(newHistory);
      persistState(nextId, newHistory, null);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;

    const newHistory = [...history];
    const lastStep = newHistory.pop();

    if (lastStep) {
      setCurrentNodeId(lastStep.nodeId);
      setResult(null);
      setHistory(newHistory);
      persistState(lastStep.nodeId, newHistory, null);
    }
  };

  const handleRestart = () => {
    clearQuizState();
    const defaultState = getDefaultState();
    setCurrentNodeId(defaultState.currentNodeId);
    setHistory(defaultState.history);
    setResult(defaultState.result);
  };

  if (!isHydrated) {
    return (
      <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <Header />
        <main className="flex flex-1 items-center justify-center p-6">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
            <p className="text-sm text-zinc-500">Carregando questionário...</p>
          </div>
        </main>
      </div>
    );
  }

  const activeQuestion = currentNodeId ? questions[currentNodeId] : null;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Header showReset onReset={handleRestart} />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 md:py-12">
        <div className="w-full max-w-2xl space-y-6">
          {/* Progress & Navigation Bar */}
          {!result && (
            <ProgressBar
              currentStep={history.length + 1}
              totalEstimatedSteps={5}
              canGoBack={history.length > 0}
              onBack={handleBack}
            />
          )}

          {/* Render Result Screen */}
          {result && (
            <ResultCard
              result={result}
              onRestart={handleRestart}
              historyLength={history.length}
            />
          )}

          {/* Render Active Question */}
          {!result && activeQuestion && (
            <QuestionCard
              questionNode={activeQuestion}
              onAnswer={handleAnswer}
              stepNumber={history.length + 1}
            />
          )}

          {/* Fallback if node not found */}
          {!result && !activeQuestion && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center dark:border-rose-900/50 dark:bg-rose-950/20">
              <h2 className="text-lg font-bold text-rose-800 dark:text-rose-300">
                Pergunta não encontrada
              </h2>
              <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">
                Ocorreu um problema ao recuperar a etapa atual da árvore de decisão.
              </p>
              <button
                onClick={handleRestart}
                type="button"
                className="mt-4 rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500"
              >
                Reiniciar Questionário
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
