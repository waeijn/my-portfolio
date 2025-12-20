import React from "react";
import { personalInfo } from "../../data/personalInfo";
// Optional: import { HeartIcon } from "../../assets/icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light-surface dark:bg-bg-dark-surface border-t border-border-light dark:border-border-dark px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-2">
        <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
          &copy; {currentYear}{" "}
          <span className="font-semibold text-text-light-primary dark:text-text-dark-primary">
            {personalInfo.firstName} {personalInfo.lastName}
          </span>
          . All rights reserved.
        </div>

        <div className="text-xs text-text-light-muted dark:text-text-dark-muted flex items-center gap-1">
          Built with
          <span className="font-medium text-text-light-secondary dark:text-text-dark-secondary">
            React
          </span>{" "}
          &
          <span className="font-medium text-text-light-secondary dark:text-text-dark-secondary">
            Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
