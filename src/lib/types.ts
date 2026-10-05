export interface CareerResult {
  career: string;
  description: string;
  roadmap?: string;
  roadmapUrl?: string;
  subjects?: string[];
  subject?: string[];
}

export type DecisionBranch = 
  | { next: string }
  | CareerResult;

export function isCareerResult(branch: DecisionBranch): branch is CareerResult {
  return "career" in branch;
}

export function isNextBranch(branch: DecisionBranch): branch is { next: string } {
  return "next" in branch && typeof (branch as { next: string }).next === "string";
}

export interface QuestionNode {
  id: string;
  question: string;
  sim: DecisionBranch;
  nao: DecisionBranch;
}

export type DecisionTree = Record<string, QuestionNode>;

export interface QuizHistoryEntry {
  nodeId: string;
  choice: "sim" | "nao";
}

export interface QuizSessionState {
  currentNodeId: string | null;
  history: QuizHistoryEntry[];
  result: CareerResult | null;
}
