import React from "react";
import { personalInfo } from "../../data/personalInfo";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
} from "../../assets/icons";
import profileImg from "../../assets/images/1x1-no_bg.png";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-bg-light dark:bg-bg-dark overflow-hidden"
    >

      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
        {/* Profile Photo */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 mx-auto animate-fade-in group">
          {/* Ambient Aura */}
          <div className="absolute inset-0 -z-10 pointer-events-none scale-[2.5] rounded-full bg-gradient-to-tr from-indigo-200/60 via-blue-100/40 to-transparent dark:from-indigo-600/25 dark:via-purple-600/20 dark:to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-full bg-bg-light dark:bg-bg-dark p-1">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-bg-light-surface dark:bg-bg-dark-surface">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://ui-avatars.com/api/?name=John+Wayne&background=random";
                }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up">
          <span className="text-text-light-primary dark:text-text-dark-primary">
            {personalInfo.firstName} {personalInfo.lastName}
          </span>
        </h1>

        {/* Title */}
        <p className="text-lg md:text-2xl text-accent-light dark:text-accent-dark font-bold mb-6 px-4">
          {personalInfo.title}
        </p>

        {/* Bio */}
        <p className="max-w-xl text-neutral-600 dark:text-neutral-400 text-base leading-relaxed text-balance mx-auto mb-10 px-2">
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 w-full sm:w-auto mb-10">
          <button
            onClick={() => scrollToSection("projects")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 border-2 border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary font-bold rounded-xl hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {[
            { name: "Instagram", url: personalInfo.social.instagram, Icon: InstagramIcon },
            { name: "LinkedIn", url: personalInfo.social.linkedin, Icon: LinkedInIcon },
            { name: "GitHub", url: personalInfo.social.github, Icon: GithubIcon },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark hover:bg-accent-light dark:hover:bg-accent-dark transition-all group hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
              aria-label={link.name}
            >
              <link.Icon className="w-6 h-6 text-text-light-primary dark:text-text-dark-primary group-hover:text-white dark:group-hover:text-bg-dark transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-text-light-muted dark:text-text-dark-muted hover:text-accent-light dark:hover:text-accent-dark transition-colors hidden sm:block"
        aria-label="Scroll down"
      >
        <div className="animate-bounce">
          <ArrowDownIcon className="w-8 h-8" />
        </div>
      </button>
    </section>
  );
}

export default Hero;
