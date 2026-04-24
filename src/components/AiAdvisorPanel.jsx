import { useState } from "react";

function highlightText(text, highlights = []) {
  return highlights.reduce((content, highlight) => {
    const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return content.replace(
      new RegExp(escaped, "g"),
      `<strong>${highlight}</strong>`,
    );
  }, text);
}

export default function AiAdvisorPanel({ insights }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const askAi = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    setIsLoading(true);
    setResponse("");

    try {
      const res = await fetch("/.netlify/functions/ask-ai",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmedQuery, expenses: insights }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "AI request failed");
      }

      setResponse(data.answer || "No response received.");
      setQuery("");
    } catch (error) {
      setResponse(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      askAi();
    }
  };

  return (
    <div className="ai-panel">
      <div className="ai-header">
        <div className="ai-badge">✦</div>
        <div>
          <div className="ai-title">AI Financial Advisor</div>
          <div className="ai-subtitle">Powered by OpenAI</div>
        </div>
      </div>

      {insights.map((insight) => (
        <div className="ai-insight" key={insight.tag}>
          <div className={`insight-tag ${insight.tagClass}`}>{insight.tag}</div>
          <div
            className="insight-text"
            dangerouslySetInnerHTML={{
              __html: highlightText(insight.text, insight.highlights || []),
            }}
          />
        </div>
      ))}

      <div className="ai-query-wrap">
        <textarea
          className="ai-input"
          rows="2"
          value={query}
          disabled={isLoading}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything... 'Why did I spend more in March?'"
        />
        <button className="ai-ask-btn" onClick={askAi} disabled={isLoading}>
          {isLoading ? "Thinking..." : "✦ Ask AI advisor ↗"}
        </button>

        {(isLoading || response) && (
          <div className="ai-response visible">
            {isLoading ? (
              <>
                Analyzing your financial data
                <span className="typing-dots">
                  <span />
                  <span />
                  <span />
                </span>
              </>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: response }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
