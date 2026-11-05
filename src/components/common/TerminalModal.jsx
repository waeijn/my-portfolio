import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import { XIcon } from "../../assets/icons";

const INITIAL_HISTORY = [
  { type: "system", content: "Portfolio 6.8.0-40-generic x86_64" },
  { type: "system", content: `Last login: ${new Date().toDateString()}` },
  { type: "system", content: "" },
  {
    type: "system",
    content: 'Type "help" for commands, or ask anything to chat with AI.',
  },
];

const COMMANDS = {
  help: () => [
    "",
    "  help       Show this command list",
    "  about      Who am I?",
    "  skills     My tech stack",
    "  projects   What I'm working on",
    "  contact    How to reach me",
    "  whoami     Print effective userid",
    "  date       Print or set the system date and time",
    "  pwd        Print name of current/working directory",
    "  ls         List directory contents",
    "  clear      Clear the terminal screen",
    "  exit       Cause normal process termination",
    "",
    "  Tip: Ask any question in plain English to chat with AI!",
    "",
  ],
  about: () => [
    "John Wayne Landong",
    "Full Stack Developer & Cybersecurity Enthusiast",
    "Based in Laguna, Philippines.",
  ],
  skills: () => [
    "Languages   : JavaScript, Python, PHP, C#, Dart, SQL",
    "Frontend    : React, Flutter, Tailwind CSS, Vite",
    "Backend     : Laravel, FastAPI, Node.js",
    "Security    : Splunk, Kali Linux, Nmap, Wireshark",
    "DevOps      : Docker, Git, GitHub Actions",
    "Other       : Unity 6, TensorFlow.js",
  ],
  projects: () => [
    "1. SignKo                      [In Progress]",
    "2. CORE THREADS                [In Progress]",
    "3. SOC Home Lab                [In Progress]",
    "4. Adaptive API Rate Limiter   [In Progress]",
    "5. Developer Portfolio v2.0    [Completed]",
    "6. Secure Enterprise Network   [Completed]",
    "7. AuraTech                    [Completed]",
    "8. Wilma                       [Completed]",
    "9. Task Management System      [Completed]",
  ],
  contact: () => [
    "Email    : johnwaynelandong@gmail.com",
    "GitHub   : github.com/waeijn",
    "LinkedIn : linkedin.com/in/johnwaynelandong",
  ],
  whoami: () => ["waeijn"],
  date: () => [new Date().toLocaleString()],
  pwd: () => ["/home/waeijn/portfolio"],
  ls: () => ["about.txt  contact.sh  projects/  skills.json  welcome.md"],
};

export default function TerminalModal({
  isOpen,
  onClose,
  isMinimized,
  setIsMinimized,
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [aiChatHistory, setAiChatHistory] = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [isClosing, setIsClosing] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setIsClosing(false);
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isThinking]);

  const handleClose = useCallback(() => {
    if (isMinimized) {
      setIsMinimized(false);
      onClose();
      return;
    }
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  }, [isMinimized, onClose, setIsMinimized]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleClose]);

  const handleMinimize = useCallback(
    (e) => {
      e?.stopPropagation();
      setIsMinimized(true);
    },
    [setIsMinimized],
  );

  const handleRestore = useCallback(() => {
    setIsMinimized(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [setIsMinimized]);

  const askAi = useCallback(
    async (question) => {
      setIsThinking(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            message: question,
            chatHistory: aiChatHistory,
          }),
        });

        clearTimeout(timeoutId);

        let data = {};
        try {
          data = await res.json();
        } catch {
          data = {};
        }

        if (!res.ok || data.error) {
          const fallbackMsg =
            data.error ||
            "I'm experiencing higher traffic than usual right now. Please try again in a few moments, or type 'help' for instant commands!";
          setHistory((prev) => [
            ...prev,
            {
              type: "system",
              content: `waeijn-ai: ${fallbackMsg}`,
            },
          ]);
        } else {
          const reply = data.reply || "";
          setHistory((prev) => [...prev, { type: "ai", content: reply }]);
          setAiChatHistory((prev) => [
            ...prev,
            { role: "user", text: question },
            { role: "model", text: reply },
          ]);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        const isTimeout = err?.name === "AbortError";
        setHistory((prev) => [
          ...prev,
          {
            type: "system",
            content: isTimeout
              ? "waeijn-ai: Request timed out. Feel free to try again in a few seconds, or type 'help' for instant commands."
              : "waeijn-ai: I'm having a little trouble connecting right now. Please try again shortly, or explore John's work using 'help'.",
          },
        ]);
      } finally {
        setIsThinking(false);
        setTimeout(() => inputRef.current?.focus(), 20);
      }
    },
    [aiChatHistory],
  );

  const handleCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim();

      if (!trimmed) {
        setHistory((prev) => [...prev, { type: "user", content: "" }]);
        return;
      }

      setCmdHistory((prev) => [trimmed, ...prev]);
      setCmdIndex(-1);

      setHistory((prev) => [...prev, { type: "user", content: trimmed }]);

      const lower = trimmed.toLowerCase();
      const parts = trimmed.split(/\s+/);
      const key = parts[0].toLowerCase();

      if (lower === "clear") {
        setHistory([]);
        setAiChatHistory([]);
        return;
      }

      if (lower === "exit") {
        handleClose();
        return;
      }

      if (key === "echo") {
        const echoContent = trimmed.substring(4).trim();
        setHistory((prev) => [
          ...prev,
          { type: "system", content: echoContent },
        ]);
        return;
      }

      if (key === "sudo") {
        setHistory((prev) => [
          ...prev,
          {
            type: "system",
            content:
              "waeijn is not in the sudoers file. This incident will be reported.",
          },
        ]);
        return;
      }

      // Exact single-word built-in CLI commands
      if (parts.length === 1 && COMMANDS[key]) {
        const lines = COMMANDS[key]();
        setHistory((prev) => [
          ...prev,
          ...lines.map((line) => ({ type: "system", content: line })),
        ]);
        return;
      }

      // Strip optional "ai " or "ask " prefix if user typed e.g. "ai tell me about john"
      const query =
        (key === "ai" || key === "ask") && parts.length > 1
          ? trimmed.substring(key.length).trim()
          : trimmed;

      askAi(query);
    },
    [handleClose, askAi],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (isThinking) return;
        handleCommand(input);
        setInput("");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCmdIndex((prev) => {
          const next = Math.min(prev + 1, cmdHistory.length - 1);
          if (cmdHistory[next]) setInput(cmdHistory[next]);
          return next;
        });
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCmdIndex((prev) => {
          const next = prev - 1;
          if (next < 0) {
            setInput("");
            return -1;
          }
          if (cmdHistory[next]) setInput(cmdHistory[next]);
          return next;
        });
      }
    },
    [input, cmdHistory, handleCommand, isThinking],
  );

  const Prompt = () => (
    <span className="shrink-0 select-none mr-2">
      <span className="text-green-500 font-bold">waeijn@portfolio</span>
      <span className="text-neutral-300">:</span>
      <span className="text-blue-400 font-bold">~</span>
      <span className="text-neutral-300">$</span>
    </span>
  );

  const renderedHistory = useMemo(
    () =>
      history.map((item, i) => (
        <div key={i} className="leading-6 whitespace-pre-wrap break-words">
          {item.type === "user" ? (
            <div className="flex items-start">
              <Prompt />
              <span className="text-neutral-300">{item.content}</span>
            </div>
          ) : item.type === "ai" ? (
            <div className="my-1 pl-2 border-l-2 border-green-500/60 text-neutral-200">
              {item.content}
            </div>
          ) : (
            <div className="text-neutral-300">{item.content}</div>
          )}
        </div>
      )),
    [history],
  );

  if (!isOpen && !isClosing) return null;

  if (isMinimized) {
    return createPortal(
      <div
        onClick={handleRestore}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleRestore();
          }
        }}
        className="fixed bottom-0 right-4 sm:right-6 z-[100] w-64 sm:w-72 flex items-center justify-between pl-3.5 pr-1 h-10 bg-[#1E1E1E] border border-b-0 border-neutral-700/60 rounded-t-xl shadow-2xl hover:bg-[#262626] transition-all duration-200 cursor-pointer select-none group"
        aria-label="Restore terminal"
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
          <span className="text-xs font-mono text-neutral-200 group-hover:text-white truncate">
            waeijn@portfolio:~
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400 hover:bg-[#e81123] hover:text-white transition-colors shrink-0"
          aria-label="Close terminal"
        >
          <XIcon className="w-3.5 h-3.5" />
        </button>
      </div>,
      document.body,
    );
  }

  return createPortal(
    <div
      className={`fixed bottom-0 right-4 sm:right-6 z-[100] w-[calc(100vw-2rem)] sm:w-[400px] md:w-[440px] h-[420px] sm:h-[460px] max-h-[80vh] bg-[#0C0C0C] border border-b-0 border-neutral-700/60 rounded-t-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-200 ${
        isClosing
          ? "opacity-0 translate-y-6 pointer-events-none"
          : "opacity-100 translate-y-0 animate-fade-up"
      }`}
      role="dialog"
      aria-label="Interactive terminal"
    >
      {/* Title Bar - Chat Dock Style */}
      <div
        onClick={handleMinimize}
        className="flex items-center justify-between pl-3.5 pr-0 py-0 h-10 bg-[#1E1E1E] border-b border-neutral-800 select-none cursor-pointer hover:bg-[#252525] transition-colors shrink-0"
        title="Click to minimize"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
          <span className="text-[13px] text-neutral-200 font-mono tracking-wide">
            waeijn@portfolio:~
          </span>
        </div>
        <div className="flex items-center h-full">
          <button
            onClick={handleMinimize}
            className="flex items-center justify-center w-10 h-full text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Minimize terminal"
          >
            <span className="text-lg leading-none -mt-2">_</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="flex items-center justify-center w-10 h-full text-neutral-400 hover:bg-[#e81123] hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <XIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="flex-1 p-3.5 overflow-y-auto font-mono text-xs sm:text-[13px] text-neutral-300 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {renderedHistory}

        {isThinking && (
          <div className="flex items-center gap-2 text-neutral-400 leading-6 mt-1 animate-pulse">
            <span className="text-green-500 font-bold select-none">[ai]</span>
            <span>Thinking...</span>
          </div>
        )}

        <div className="flex items-center leading-6 mt-1">
          <Prompt />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isThinking}
            className="flex-1 bg-transparent border-none outline-none text-neutral-300 font-mono text-xs sm:text-[13px] ml-0 p-0 caret-neutral-300 disabled:opacity-50"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-label="Terminal command input"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>,
    document.body,
  );
}
