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
    "Frontend Development": CodeIcon,
    "Backend Development": SettingsIcon,
    "Data & Databases": DatabaseIcon,
    "Infrastructure & Tools": ToolIcon,
    Cybersecurity: ShieldIcon,
    "Process Improvement": TrendingUpIcon,
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
            Here are the technologies and tools I am practicing and working with
            to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.categories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.name] || CodeIcon;

            return (
              <div
                key={categoryIndex}
                className="bg-bg-light-surface dark:bg-bg-dark-surface p-8 rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col group/card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-accent-light dark:text-accent-dark">
                    <IconComponent className="w-8 h-8 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="py-2 px-4 rounded-lg bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark hover:text-accent-light dark:hover:text-accent-dark hover:border-accent-light dark:hover:border-accent-dark transition-all cursor-default group"
                    >
                      <span className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                        {skill.name}
                      </span>
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
