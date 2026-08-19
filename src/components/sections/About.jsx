import React from "react";
import { personalInfo } from "../../data/personalInfo";
import { now } from "../../data/now";
import { DigitalBookshelf } from "../common/DigitalBookshelf";

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text-light-primary dark:text-text-dark-primary mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Bio, Interests & Beyond Coding) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6 text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-lg">
              <p>{personalInfo.about.introduction}</p>
              <p>{personalInfo.about.background}</p>
              <p>{personalInfo.about.values}</p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-6">
                Interests & Focus Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark rounded-lg text-text-light-primary dark:text-text-dark-primary hover:border-accent-light dark:hover:border-accent-dark transition-colors font-medium text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Beyond Coding Card */}
            <div className="p-8 bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark rounded-xl hover:border-accent-light dark:hover:border-accent-dark transition-all shadow-sm">
              <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
                Beyond Coding
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-sm">
                {personalInfo.about.beyondCoding}
              </p>
            </div>
          </div>

          {/* Right Column (Now Card & Digital Bookshelf) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* What I'm Doing Now Card */}
            <div className="p-8 bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark rounded-xl hover:border-accent-light dark:hover:border-accent-dark transition-all shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
                  What I'm Doing Now
                </h3>
              </div>

              <ul className="space-y-4 text-text-light-secondary dark:text-text-dark-secondary text-sm">
                <li>
                  <strong className="text-accent-light dark:text-accent-dark block mb-1">
                    Focus
                  </strong>
                  {now.focus}
                </li>
                <li>
                  <strong className="text-accent-light dark:text-accent-dark block mb-1">
                    Reading
                  </strong>
                  {now.reading}
                </li>
                <li>
                  <strong className="text-accent-light dark:text-accent-dark block mb-1">
                    Learning
                  </strong>
                  {now.learning}
                </li>
                <li>
                  <strong className="text-accent-light dark:text-accent-dark block mb-1">
                    Exploring
                  </strong>
                  {now.exploring}
                </li>
              </ul>
            </div>

            {/* Digital Bookshelf */}
            <DigitalBookshelf />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
