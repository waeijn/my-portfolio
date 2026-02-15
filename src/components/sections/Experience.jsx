import React from "react";
import { experiences } from "../../data/experience";
import {
  MapPinIcon,
  ClockIcon,
  ChevronDoubleRightIcon,
} from "../../assets/icons";

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Experience
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            Professional experience and roles where I've applied my skills.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                    {exp.position}
                  </h2>
                  <h3 className="text-xl text-accent-light dark:text-accent-dark font-semibold mb-2">
                    {exp.company}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-text-light-secondary dark:text-text-dark-secondary text-sm">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className={
                      "px-4 py-2 rounded-lg text-sm font-bold transition-all " +
                      (exp.current
                        ? "bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark animate-pulse-slow"
                        : "bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark")
                    }
                  >
                    {exp.current ? "Current" : exp.type}
                  </span>
                </div>
              </div>

              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-text-light-secondary dark:text-text-dark-secondary"
                    >
                      <ChevronDoubleRightIcon className="w-4 h-4 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded-lg border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
