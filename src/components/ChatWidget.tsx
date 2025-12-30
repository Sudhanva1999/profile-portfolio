/**
 * Minimal Chat Widget Component
 *
 * A simple, production-ready chat interface for your portfolio
 * Styled with modern CSS - customize colors and styles as needed
 */

import { useState, useRef, useEffect } from "react";
import { askAssistant, clearSession } from "../lib/chatApi";
import { X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm Sudhanva's AI avatar, ask me about my projects, experience or skills",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      text: trimmedInput,
      timestamp: new Date(),
    };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await askAssistant(trimmedInput);
      
      // Add assistant response
      const assistantMessage: Message = {
        role: "assistant",
        text: res.answer,
        timestamp: new Date(),
      };
      setMessages((m) => [...m, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      
      // Add error message
      const errorMessage: Message = {
        role: "assistant",
        text: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((m) => [...m, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function handleClearConversation() {
    clearSession();
    setMessages([
      {
        role: "assistant",
        text: "Hi! I'm Sudhanva's AI avatar, ask me about my projects, experience or skills",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  }

  if (!isOpen) return null;

  return (
    <div className="chat-widget">
      <div className="chat-header">
        <div>
          <h3>💬 Ask About me</h3>
          <p className="chat-subtitle">Powered by AI</p>
        </div>
        <div className="flex gap-2">
          <button
            className="clear-button"
            onClick={handleClearConversation}
            title="Start new conversation"
          >
            🔄
          </button>
          <button
            className="clear-button"
            onClick={onClose}
            title="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`message message-${m.role}`}>
            <div className="message-avatar">
              {m.role === "user" ? "👤" : "🤖"}
            </div>
            <div className="message-content">
              <div className="message-text">{m.text}</div>
              <div className="message-time">
                {m.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message message-assistant">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="chat-error">
          ⚠️ {error}
        </div>
      )}

      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about experience, projects, skills..."
          disabled={isLoading}
          maxLength={500}
        />
        <button 
          className="chat-send-button" 
          onClick={send}
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>

      <div className="chat-footer">
        <small>Responses may take a few seconds</small>
      </div>
    </div>
  );
}

