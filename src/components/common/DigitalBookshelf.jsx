import React, { useState, useRef, useCallback, useEffect } from "react";
import { FiBookOpen, FiExternalLink, FiStar } from "react-icons/fi";
import { BOOKS, GOODREADS_PROFILE_URL } from "../../data/books";

const AUTO_SCROLL_SPEED = 0.5;
const PAUSE_AFTER_INTERACT = 2000;

export const DigitalBookshelf = () => {
  const [activeBook, setActiveBook] = useState(BOOKS[0]);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);
  const pauseTimerRef = useRef(null);
  const isAutoScrollingRef = useRef(true);

  // Triple books for seamless auto-scroll looping
  const loopedBooks = [...BOOKS, ...BOOKS, ...BOOKS];

  // Auto-scroll animation loop
  const autoScroll = useCallback(() => {
    const el = carouselRef.current;
    if (el && !isPausedRef.current) {
      el.scrollLeft += AUTO_SCROLL_SPEED;

      // Seamless loop snap-back (invisible — scrollbar is hidden)
      const sectionWidth = el.scrollWidth / 3;
      if (el.scrollLeft >= sectionWidth * 2) {
        el.scrollLeft -= sectionWidth;
      }
    }
    animationRef.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [autoScroll]);

  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true;
    isAutoScrollingRef.current = false;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      isAutoScrollingRef.current = true;
    }, PAUSE_AFTER_INTERACT);
  }, []);

  // Wheel → horizontal scroll, clamped to middle section (no loop when manual)
  const handleWheel = useCallback(
    (e) => {
      const el = carouselRef.current;
      if (!el) return;
      e.preventDefault();
      pauseAutoScroll();

      const sectionWidth = el.scrollWidth / 3;
      const minScroll = sectionWidth;
      const maxScroll = sectionWidth * 2 - el.clientWidth;

      el.scrollLeft = Math.max(
        minScroll,
        Math.min(maxScroll, el.scrollLeft + e.deltaY)
      );
    },
    [pauseAutoScroll]
  );

  const handleCarouselRef = useCallback(
    (node) => {
      carouselRef.current = node;
      if (node) {
        const sectionWidth = node.scrollWidth / 3;
        node.scrollLeft = sectionWidth;
        node.addEventListener("wheel", handleWheel, { passive: false });
      }
    },
    [handleWheel]
  );

  return (
    <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-semibold text-sm">
            <FiBookOpen className="w-4 h-4 text-accent-light dark:text-accent-dark" />
            <span>Digital Bookshelf</span>
          </div>
          <a
            href={GOODREADS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-neutral-500 hover:text-accent-light dark:hover:text-accent-dark flex items-center gap-1 transition-colors group"
          >
            Goodreads{" "}
            <FiExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Horizontal Cover Carousel */}
        <div
          ref={handleCarouselRef}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => {
            isPausedRef.current = false;
            isAutoScrollingRef.current = true;
            if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
          }}
          className="flex items-center gap-2.5 pb-2 overflow-x-auto hide-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {loopedBooks.map((book, index) => {
            const isSelected = activeBook.id === book.id;
            return (
              <button
                key={`${book.id}-${index}`}
                onClick={() => {
                  setActiveBook(book);
                  pauseAutoScroll();
                }}
                className={`relative shrink-0 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-accent-light dark:ring-accent-dark ring-offset-2 dark:ring-offset-neutral-900 -translate-y-2 shadow-lg scale-105 rounded-r-md rounded-l-sm"
                    : "opacity-75 hover:opacity-100 hover:-translate-y-1 rounded-r-md rounded-l-sm"
                }`}
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-white/30 dark:bg-white/10 z-10 rounded-l-sm mix-blend-overlay"></div>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-12 h-16 object-cover rounded-r-md rounded-l-sm shadow-[2px_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Book Mini Preview */}
      <div className="mt-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col gap-3 flex-1 overflow-hidden relative">
        <div 
          key={activeBook.id} 
          className="flex flex-col gap-3 animate-fade-in h-full justify-center"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate">
                  {activeBook.title}
                </h4>
                {activeBook.tag && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 uppercase tracking-wider font-semibold">
                    {activeBook.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {activeBook.author}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mt-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < activeBook.rating
                        ? "fill-amber-500"
                        : "text-neutral-300 dark:text-neutral-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <a
              href={activeBook.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 flex items-center gap-1.5 font-medium"
            >
              Review <FiExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
