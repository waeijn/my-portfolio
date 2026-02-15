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
              className="bg-bg-light-surface dark:bg-bg-dark-surface p-6 rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col items-center text-center cursor-pointer group"
              onClick={() => handleCardClick(item.type)}
            >
              <item.Icon className="w-6 h-6 text-accent-light dark:text-accent-dark flex-shrink-0 group-hover:scale-110 transition-transform" />
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
                className="p-4 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark hover:bg-accent-light dark:hover:bg-accent-dark transition-all group"
                aria-label={link.name}
              >
                <link.Icon className="w-6 h-6 text-text-light-primary dark:text-text-dark-primary group-hover:text-white dark:group-hover:text-bg-dark transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <a
          href={personalInfo.resume}
          download
          className="inline-flex items-center gap-2 px-10 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/10"
        >
          <DownloadIcon className="w-5 h-5" />
          Download Resume
        </a>
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
