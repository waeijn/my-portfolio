import React from "react";
import { certifications } from "../../../data/certifications";
import { ExternalLinkIcon, XIcon } from "../../../assets/icons";

function CertificationGalleryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-bg-light dark:bg-bg-dark w-full max-w-5xl max-h-[90vh] rounded-2xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
          <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
            All{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Certifications
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg-light dark:hover:bg-bg-dark rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="w-6 h-6 text-text-light-primary dark:text-text-dark-primary" />
          </button>
        </div>

        {/* Modal Body (Scrollable Grid) */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-xl border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-text-light-muted dark:text-text-dark-muted whitespace-nowrap ml-4">
                    {cert.date}
                  </span>
                </div>

                {/* Issuer */}
                <p className="text-accent-light dark:text-accent-dark text-sm font-semibold mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-bg-light dark:bg-bg-dark rounded border border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Link */}
                  {cert.link && (
                    <div className="pt-4 border-t border-border-light dark:border-border-dark">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          View Certificate
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationGalleryModal;
