import React, { useState } from "react";
import { projects } from "../../data/projects";
import { GithubIcon } from "../../assets/icons";
import ProjectGalleryModal from "./modals/ProjectGalleryModal";

function Projects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Projects
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            A showcase of my work and technical contributions.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Projects Grid - Top 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface p-8 rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  {project.title}
                </h2>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-text-light-muted dark:text-text-dark-muted mb-2">
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

              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies Tags */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded text-xs font-medium border border-border-light dark:border-border-dark"
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
                      <GithubIcon className="w-5 h-5" />
                      <span className="text-sm font-semibold">View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "See All" Action Button */}
        {projects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="px-10 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark font-bold rounded-xl hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-300"
            >
              See All Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal for full list */}
      <ProjectGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}

export default Projects;
