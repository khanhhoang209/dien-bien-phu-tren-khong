"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";

export default function HistoryChat() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/chat",
      onError: (err) => console.error("Chat error:", err),
    });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div
          className="flex flex-col w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          style={{ animation: "fadeInUp 0.25s ease-out" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-red-700 text-white shrink-0">
            <div>
              <h3 className="text-sm font-bold leading-tight">
                Trợ lý Lịch sử AI
              </h3>
              <p className="text-[11px] opacity-80 leading-tight">
                12 ngày đêm ĐBP trên không
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white text-base font-bold"
              aria-label="Đóng"
            >
              ✕
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gray-50">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 select-none px-4">
                <svg
                  className="w-10 h-10 mb-3 text-red-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.476.89 6.08 2.35M12 6.042A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.331 0-4.476.89-6.08 2.35M12 6.042V20.4"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-500">
                  Xin chào! Hãy hỏi tôi về chiến thắng
                </p>
                <p className="text-sm font-semibold text-red-600">
                  &quot;Điện Biên Phủ trên không&quot;
                </p>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 max-w-[80%] rounded-2xl text-sm whitespace-pre-wrap shadow-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-white border border-gray-300 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-2.5 shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Error Banner */}
          {error && (
            <div className="px-3 py-2 bg-red-50 text-red-600 text-xs border-t border-red-100 shrink-0">
              ⚠️ Lỗi: {error.message}
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-200 bg-white shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Nhập câu hỏi..."
              className="flex-1 px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-400 transition-all text-gray-800 placeholder:text-gray-400"
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || input.trim() === ""}
              className="w-9 h-9 flex items-center justify-center bg-red-700 text-white rounded-xl hover:bg-red-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              aria-label="Gửi"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-red-700 hover:bg-red-800 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          aria-label="Mở trợ lý AI"
          style={{ animation: "fadeInUp 0.3s ease-out" }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
