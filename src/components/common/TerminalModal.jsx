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
  { type: "system", content: 'Type "help" to see available commands.' },
];

const COMMANDS = {
  help: () => [
    "",
    "  help       Show this command list",
    "  about      Who am I?",
    "  skills     My tech stack",
    "  projects   What I\x27m working on",
    "  contact    How to reach me",
    "  whoami     Print effective userid",
    "  date       Print or set the system date and time",
    "  pwd        Print name of current/working directory",
    "  ls         List directory contents",
    "  clear      Clear the terminal screen",
    "  exit       Cause normal process termination",
    "",
  ],
  about: () => [
    "John Wayne Landong",
    "Full Stack Developer & Cybersecurity Enthusiast",
    "Based in Laguna, Philippines.",
  ],
  skills: () => [
    "Languages   : JavaScript, Python, PHP, C#, SQL",
    "Frontend    : React, Tailwind CSS, Vite",
    "Backend     : Laravel, FastAPI, Node.js",
    "Security    : Splunk, Kali Linux, Nmap, Wireshark",
    "DevOps      : Docker, Git, GitHub Actions",
  ],
  projects: () => [
    "1. Adaptive API Rate Limiter   [In Progress]",
    "2. SOC Home Lab                [In Progress]",
    "3. CORE THREADS                [In Progress]",
    "4. Developer Portfolio v2.0    [Completed]",
    "5. Wilma - AI Inventory        [Completed]",
    "6. Task Management System      [Completed]",
  ],
  contact: () => [
    "Email    : johnwaynelandong@gmail.com",
    "GitHub   : github.com/waeijn",
    "LinkedIn : linkedin.com/in/waeijn",
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
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [isClosing, setIsClosing] = useState(false);

  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setIsClosing(false);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isMinimized) {
          handleClose();
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, isMinimized]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setIsMinimized(false);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  }, [onClose, setIsMinimized]);

  const handleMinimize = useCallback(() => {
    setIsMinimized(true);
  }, [setIsMinimized]);

  const handleRestore = useCallback(() => {
    setIsMinimized(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [setIsMinimized]);

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

      const key = trimmed.toLowerCase().split(" ")[0];

      if (key === "clear") {
        setHistory([]);
        return;
      }

      if (key === "exit") {
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

      const handler = COMMANDS[key];
      if (handler) {
        const lines = handler();
        setHistory((prev) => [
          ...prev,
          ...lines.map((line) => ({ type: "system", content: line })),
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          {
            type: "system",
            content: `bash: ${key}: command not found`,
          },
        ]);
      }
    },
    [handleClose],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
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
    [input, cmdHistory, handleCommand],
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
        <div key={i} className="leading-6 whitespace-pre-wrap break-all">
          {item.type === "user" ? (
            <div className="flex items-start">
              <Prompt />
              <span className="text-neutral-300">{item.content}</span>
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
      <button
        onClick={handleRestore}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-2.5 bg-[#0C0C0C] border border-neutral-700/50 rounded-full shadow-2xl hover:border-neutral-500 hover:scale-105 active:scale-95 transition-all duration-200 animate-fade-in group"
        aria-label="Restore terminal"
      >
        <div className="flex items-center gap-2">
          <span className="text-neutral-300 text-xs font-mono font-bold animate-pulse">
            ~$
          </span>
        </div>
        <span className="text-xs font-mono text-neutral-300 group-hover:text-white transition-colors">
          waeijn@portfolio:~
        </span>
      </button>,
      document.body,
    );
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-200 ${
        isClosing ? "bg-black/0" : "bg-black/60 backdrop-blur-sm"
      }`}
      onClick={handleClose}
    >
      <div
        className={`w-full max-w-3xl bg-[#0C0C0C] border border-neutral-700/50 rounded-lg overflow-hidden shadow-2xl flex flex-col h-[500px] transition-all duration-200 ${
          isClosing
            ? "opacity-0 scale-95 translate-y-4"
            : "opacity-100 scale-100 translate-y-0 animate-fade-up"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar - Ubuntu Style */}
        <div className="flex items-center justify-between pl-3 pr-0 py-0 h-9 bg-[#1E1E1E] border-b border-black/20 select-none">
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-neutral-300 font-sans tracking-wide">
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
              onClick={handleClose}
              className="flex items-center justify-center w-10 h-full text-neutral-400 hover:bg-[#e81123] hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <XIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-sm text-neutral-300 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {renderedHistory}

          <div className="flex items-center leading-6 mt-1">
            <Prompt />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-neutral-300 font-mono text-sm ml-0 p-0 caret-neutral-300"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
