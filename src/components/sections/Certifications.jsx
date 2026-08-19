import React, { useState } from "react";
import { certifications } from "../../data/certifications";
import { ExternalLinkIcon, IbmIcon, GoogleIcon, CiscoIcon, FreecodecampIcon, AwardIcon } from "../../assets/icons";
import CertificationGalleryModal from "./modals/CertificationGalleryModal";

const getIssuerIcon = (iconKey) => {
  switch (iconKey) {
    case "google":
      return (
        <GoogleIcon className="w-5 h-5 text-accent-light dark:text-accent-dark" />
      );
    case "cisco":
      return (
        <CiscoIcon className="w-5 h-5 text-accent-light dark:text-accent-dark" />
      );
    case "freecodecamp":
      return (
        <FreecodecampIcon className="w-5 h-5 text-accent-light dark:text-accent-dark" />
      );
    case "ibm":
      return (
        <IbmIcon size={20} className="text-accent-light dark:text-accent-dark" />
      );
    default:
      return (
        <AwardIcon className="w-5 h-5 text-accent-light dark:text-accent-dark" />
      );
  }
};

function Certifications() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const featuredCertifications = certifications.slice(0, 6);

  return (
    <section
      id="certifications"
      className="px-6 py-20 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Certifications
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            Formal training and credentials that validate my skill set.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all p-5 flex flex-col group"
            >
              <div className="mb-4 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark flex items-center justify-center">
                  {getIssuerIcon(cert.icon)}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors mb-1 line-clamp-2">
                    {cert.title}
                  </h2>
                  <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded text-xs font-medium border border-border-light dark:border-border-dark"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-bg-light dark:bg-bg-dark text-text-light-muted dark:text-text-dark-muted rounded text-xs font-medium border border-transparent">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex justify-end">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-light dark:text-accent-dark hover:opacity-80 transition-opacity"
                  >
                    <span className="text-sm font-semibold">
                      View Credential
                    </span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm font-medium text-text-light-muted dark:text-text-dark-muted">
                    Internal Credential
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* "See All" Action Button */}
        {certifications.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="px-10 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark font-bold rounded-xl hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-300"
            >
              See All Certifications
            </button>
          </div>
        )}
      </div>

      {/* Modal for full list */}
      <CertificationGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}

export default Certifications;
