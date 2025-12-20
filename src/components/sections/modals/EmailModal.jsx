import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function EmailModal({ isOpen, onClose }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  const handleClose = () => {
    setStatus(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-bg-light dark:bg-bg-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary">
            Send Me a Message
          </h2>
          <button
            onClick={handleClose}
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

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="text-left">
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-4 py-3 rounded-lg bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:border-accent-light dark:focus:border-accent-dark transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/10"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg text-center">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg text-center">
              Failed to send message. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default EmailModal;
