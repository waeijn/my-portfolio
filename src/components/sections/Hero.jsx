import React from "react";
import { personalInfo } from "../../data/personalInfo";
import { ArrowDownIcon } from "../../assets/icons";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Profile Photo - Scaled down for mobile */}
        <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border-2 border-border-light dark:border-border-dark overflow-hidden flex items-center justify-center shadow-xl animate-fade-in">
          <img
            src="/img/1x1-no_bg.png"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://ui-avatars.com/api/?name=John+Wayne&background=random";
            }}
          />
        </div>

        {/* Name - Responsive text sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up">
          <span className="text-text-light-primary dark:text-text-dark-primary">
            {personalInfo.firstName} {personalInfo.lastName}
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-accent-light dark:text-accent-dark font-bold mb-6 px-4">
          {personalInfo.title}
        </p>

        <p className="text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-10 leading-relaxed px-2">
          {personalInfo.bio}
        </p>

        {/* Action Buttons - Stacked on mobile, row on tablet+ */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-10 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/10 active:scale-95"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-10 py-4 border-2 border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary font-bold rounded-xl hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all active:scale-95"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator - Hidden on very small screens to save space */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-text-light-muted dark:text-text-dark-muted hover:text-accent-light dark:hover:text-accent-dark transition-colors hidden sm:block"
          aria-label="Scroll down"
        >
          <div className="animate-bounce">
            <ArrowDownIcon className="w-8 h-8" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
