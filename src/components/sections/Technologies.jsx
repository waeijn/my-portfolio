import React from "react";
import { technologies } from "../../data/technologies";
import {
  CodeIcon,
  SettingsIcon,
  DatabaseIcon,
  ToolIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "../../assets/icons";

function Technologies() {
  const iconMap = {
    "Frontend & Design": CodeIcon,
    "Backend & Intelligent Systems": SettingsIcon,
    "Data & Storage": DatabaseIcon,
    "Infrastructure & Tools": ToolIcon,
    "Cybersecurity & Networking": ShieldIcon,
    "Leadership & Research": TrendingUpIcon,
  };

  return (
    <section
      id="technologies"
      className="px-6 py-20 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Technologies &{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Skills
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I am practicing and working with to bring
            ideas to life.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {technologies.categories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.name] || CodeIcon;

            return (
              <div
                key={categoryIndex}
                className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-accent-light dark:hover:border-accent-dark hover:shadow-lg transition-all duration-300 flex flex-col justify-start group/card hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent-light/10 dark:bg-accent-dark/10 flex items-center justify-center text-accent-light dark:text-accent-dark group-hover/card:bg-accent-light group-hover/card:text-white dark:group-hover/card:bg-accent-dark dark:group-hover/card:text-bg-dark transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary leading-tight">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
