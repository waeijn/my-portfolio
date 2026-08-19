import React, { useState } from "react";
import { personalInfo } from "../../data/personalInfo";
import EmailModal from "./modals/EmailModal";
import LocationModal from "./modals/LocationModal";
import TimezoneModal from "./modals/TimezoneModal";
import {
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
  MapPinIcon,
  MailIcon,
  ClockIcon,
  DownloadIcon,
  DocumentIcon,
} from "../../assets/icons";

const socialLinks = [
  {
    name: "Instagram",
    url: personalInfo.social.instagram,
    Icon: InstagramIcon,
  },
  { name: "LinkedIn", url: personalInfo.social.linkedin, Icon: LinkedInIcon },
  { name: "GitHub", url: personalInfo.social.github, Icon: GithubIcon },
];

const contactItems = [
  {
    label: "Location",
    value: personalInfo.location,
    Icon: MapPinIcon,
    type: "location",
  },
  {
    label: "Email",
    value: personalInfo.email,
    Icon: MailIcon,
    type: "email",
  },
  {
    label: "Timezone",
    value: personalInfo.timezone,
    Icon: ClockIcon,
    type: "timezone",
  },
];

function Contact() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isTimezoneModalOpen, setIsTimezoneModalOpen] = useState(false);

  const handleCardClick = (type) => {
    if (type === "email") setIsEmailModalOpen(true);
    else if (type === "location") setIsLocationModalOpen(true);
    else if (type === "timezone") setIsTimezoneModalOpen(true);
  };

  return (
    <section id="contact" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Get In{" "}
          <span className="text-accent-light dark:text-accent-dark">Touch</span>
        </h1>
        <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-12">
          I am currently open to new opportunities and experiences.
          <br />
          Feel free to connect or drop a message!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-bg-light-surface dark:bg-bg-dark-surface p-6 rounded-2xl border border-border-light dark:border-border-dark flex flex-col items-center text-center cursor-pointer select-none group transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-accent-light/50 active:scale-[0.99]"
              onClick={() => handleCardClick(item.type)}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-accent-light/10 text-text-light-secondary dark:text-text-dark-secondary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                <item.Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mt-4 mb-2">
                {item.label}
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-6">
            Connect With Me
          </h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark hover:bg-accent-light dark:hover:bg-accent-dark transition-all group hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
                aria-label={link.name}
              >
                <link.Icon className="w-6 h-6 text-text-light-primary dark:text-text-dark-primary group-hover:text-white dark:group-hover:text-bg-dark transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex bg-bg-light-surface dark:bg-bg-dark-surface border-2 border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-accent-light dark:hover:border-accent-dark transition-all duration-300">
            {/* View Button */}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 text-text-light-primary dark:text-text-dark-primary font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="View Resume"
            >
              <DocumentIcon className="w-5 h-5" />
              Resume
            </a>
            {/* Divider */}
            <div className="w-[2px] bg-border-light dark:bg-border-dark"></div>
            {/* Download Button */}
            <a
              href={personalInfo.resume}
              download
              className="flex items-center px-6 py-4 text-text-light-primary dark:text-text-dark-primary hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
              aria-label="Download Resume"
            >
              <DownloadIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Modals */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
      <TimezoneModal
        isOpen={isTimezoneModalOpen}
        onClose={() => setIsTimezoneModalOpen(false)}
      />
    </section>
  );
}

export default Contact;
