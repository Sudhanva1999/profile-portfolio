/**
 * API Helper for Portfolio RAG Worker
 *
 * Replace the API_URL with your deployed Worker URL after deployment:
 * https://portfolio-rag.<your-account>.workers.dev
 */

const API_URL = import.meta.env.VITE_API_URL || "https://portfolio-rag.sid-paturkar.workers.dev";

export interface ChatResponse {
  answer: string;
  sessionId: string;
}

export interface EmbedResponse {
  success: boolean;
  embedded: number;
  results: Array<{ id: string; status: string }>;
}

// Session storage key
const SESSION_STORAGE_KEY = "portfolio_chat_session_id";

/**
 * Get the current session ID from localStorage
 */
function getSessionId(): string | null {
  return localStorage.getItem(SESSION_STORAGE_KEY);
}

/**
 * Save session ID to localStorage
 */
function saveSessionId(sessionId: string): void {
  localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
}

/**
 * Clear the current session (start a new conversation)
 */
export function clearSession(): void {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

/**
 * Send a message to the AI assistant
 */
export async function askAssistant(message: string): Promise<ChatResponse> {
  const sessionId = getSessionId();

  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      ...(sessionId && { sessionId })
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(error.error || `Request failed with status ${res.status}`);
  }

  const data = await res.json();

  // Save the session ID for future requests
  if (data.sessionId) {
    saveSessionId(data.sessionId);
  }

  return data;
}

/**
 * Check if the API is healthy
 */
export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/`, {
      method: "GET",
    });
    return res.ok;
  } catch {
    return false;
  }
}

