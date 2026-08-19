import React, { useEffect } from "react";

function LocationModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-bg-light dark:bg-bg-dark rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">
            Location
          </h2>
          <button
            onClick={onClose}
            className="text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Location Info */}
        <div className="mb-6 p-6 bg-bg-light-surface dark:bg-bg-dark-surface rounded-xl border border-border-light dark:border-border-dark">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2">
                Laguna, Philippines
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Region: CALABARZON
              </p>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Province: Laguna
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-border-light dark:border-border-dark">
          <iframe
            src="https://maps.google.com/maps?q=Laguna%2C%20Philippines&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Laguna, Philippines"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
