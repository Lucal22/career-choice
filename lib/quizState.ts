import { CareerResult, QuizSessionState } from "./types";
import { INITIAL_QUESTION_ID } from "@/data/questions";

const STORAGE_KEY = "career_choice_quiz_state_v1";

export function getDefaultState(): QuizSessionState {
  return {
    currentNodeId: INITIAL_QUESTION_ID,
    history: [],
    result: null,
  };
}

export function saveQuizState(state: QuizSessionState): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save quiz state to sessionStorage", e);
  }
}

export function loadQuizState(): QuizSessionState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as QuizSessionState;
  } catch (e) {
    console.error("Failed to load quiz state from sessionStorage", e);
    return null;
  }
}

export function clearQuizState(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear quiz state from sessionStorage", e);
  }
}

export function resolveRoadmapUrl(result: CareerResult): string {
  if (result.roadmap && result.roadmap.trim().length > 0) {
    return result.roadmap.trim();
  }
  if (result.roadmapUrl && result.roadmapUrl.trim().length > 0) {
    return result.roadmapUrl.trim();
  }
  return "https://roadmap.sh";
}

export function getSubjects(result: CareerResult): string[] {
  if (Array.isArray(result.subjects) && result.subjects.length > 0) {
    return result.subjects;
  }
  if (Array.isArray(result.subject) && result.subject.length > 0) {
    return result.subject;
  }
  return [];
}
