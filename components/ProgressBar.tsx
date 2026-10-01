interface ProgressBarProps {
  currentStep: number;
  totalEstimatedSteps?: number;
  onBack?: () => void;
  canGoBack?: boolean;
}

export function ProgressBar({
  currentStep,
  totalEstimatedSteps = 5,
  onBack,
  canGoBack = false,
}: ProgressBarProps) {
  const percentage = Math.min(
    100,
    Math.round((currentStep / totalEstimatedSteps) * 100)
  );

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          {canGoBack && onBack ? (
            <button
              onClick={onBack}
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 active:scale-95"
              aria-label="Voltar para a pergunta anterior"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <span>Voltar</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold">
              <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              Início
            </span>
          )}
        </div>

        <span className="font-mono text-zinc-700 dark:text-zinc-300">
          Etapa {currentStep} <span className="text-zinc-400">/ ~{totalEstimatedSteps}</span>
        </span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-200/80 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 transition-all duration-500 ease-out shadow-xs"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
