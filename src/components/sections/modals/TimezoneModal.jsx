import React, { useState, useEffect } from "react";

function TimezoneModal({ isOpen, onClose }) {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const updateTime = () => {
      const phTime = new Intl.DateTimeFormat("en-PH", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());

      const phDate = new Intl.DateTimeFormat("en-PH", {
        timeZone: "Asia/Manila",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date());

      setCurrentTime(phTime);
      setCurrentDate(phDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-bg-light dark:bg-bg-dark rounded-2xl p-8 max-w-2xl w-full shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">
            Timezone
          </h2>
          <button
            onClick={onClose}
            className="text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary transition-colors"
            aria-label="Close modal"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Current Time Display */}
        <div className="mb-6 p-8 bg-accent-light dark:bg-accent-dark rounded-xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              className="w-8 h-8 text-white dark:text-bg-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white dark:text-bg-dark">
              Current Time in the Philippines
            </h3>
          </div>
          <p className="text-lg text-white dark:text-bg-dark mb-2">
            {currentDate}
          </p>
          <p className="text-5xl font-bold text-white dark:text-bg-dark">
            {currentTime}
          </p>
        </div>

        {/* Timezone Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-bg-light-surface dark:bg-bg-dark-surface rounded-xl border border-border-light dark:border-border-dark">
            <h4 className="text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-1">
              Timezone
            </h4>
            <p className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
              Asia/Manila
            </p>
          </div>
          <div className="p-6 bg-bg-light-surface dark:bg-bg-dark-surface rounded-xl border border-border-light dark:border-border-dark">
            <h4 className="text-sm font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-1">
              UTC Offset
            </h4>
            <p className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
              UTC+8
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 p-6 bg-bg-light-surface dark:bg-bg-dark-surface rounded-xl border border-border-light dark:border-border-dark">
          <h4 className="font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
            Philippine Standard Time (PST)
          </h4>
          <ul className="space-y-2 text-text-light-secondary dark:text-text-dark-secondary">
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-accent-light dark:text-accent-dark flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No daylight saving time observed</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-accent-light dark:text-accent-dark flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Same timezone as Hong Kong, Singapore, and Perth</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimezoneModal;
