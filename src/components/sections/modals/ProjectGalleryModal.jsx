import React from "react";
import { projects } from "../../../data/projects";
import { GithubIcon, XIcon } from "../../../assets/icons";

function ProjectGalleryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-bg-light dark:bg-bg-dark w-full max-w-6xl max-h-[90vh] rounded-2xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
          <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
            All Projects
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg-light-surface dark:hover:bg-bg-dark-surface rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="w-6 h-6 text-text-light-primary dark:text-text-dark-primary" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-bg-light-surface dark:bg-bg-dark-surface p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-text-light-muted dark:text-text-dark-muted mb-2 whitespace-nowrap ml-4">
                      {project.date}
                    </span>
                    <span
                      className={
                        "px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border " +
                        (project.status === "Completed"
                          ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20")
                      }
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies Tags */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded text-xs font-medium border border-border-light dark:border-border-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-4 border-t border-border-light dark:border-border-dark">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGalleryModal;
