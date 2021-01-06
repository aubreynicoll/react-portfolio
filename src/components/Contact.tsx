import React from "react";
import contactIllustration from "../assets/images/freelancer.png";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import codepenIcon from "../assets/icons/codepen.svg";

const Contact: React.FC = () => (
  <div className="Contact" id="contact">
    <h2>Contact Me</h2>
    <div className="flex flex-row md:space-x-20 justify-between">
      <div className="flex flex-col rounded-3xl p-2.5 md:p-10 bg-gray w-6/12 justify-between">

        <p className="font-bold">
          Aubrey Nicoll
        </p>
        <p className="font-thin">
          Gold Coast, Queensland, Australia
        </p>
        <p>
          <a href="mailto:aubrey.nicoll@gmail.com" className="border-b-2 mt-3 inline-block border-gray-500">aubrey.nicoll@gmail.com</a>
        </p>
        <p>
          <a href="./assets/pdfs/resume.pdf" target="_blank" rel="noreferrer" className="border-b-2 mt-3 inline-block border-gray-500">Resume</a>
        </p>

        <div className="flex flex-row justify-start space-x-1 md:space-x-10">
          <a href="https://www.linkedin.com/in/aubrey-nicoll-37781477/" target="_blank" rel="noreferrer">
            <span className="flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
              <img src={linkedinIcon} alt="LinkedIn icon" width="24px" height="24px" className="hidden md:inline mr-1" />
              LinkedIn
            </span>
          </a>

          <a href="https://github.com/aubreynicoll" target="_blank" rel="noreferrer">
            <span className="flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
              <img src={githubIcon} alt="GitHub icon" width="24px" height="24px" className="hidden md:inline mr-1" />
              GitHub
            </span>
          </a>

          <a href="https://codepen.io/zombies808myneighbors" target="_blank" rel="noreferrer">
            <span className="flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
              <img src={codepenIcon} alt="Codepen icon" width="24px" height="24px" className="hidden md:inline mr-1" />
              CodePen
            </span>
          </a>
        </div>

      </div>
      <div className="w-6/12">
        <img src={contactIllustration} alt="Contact Illustration" className="rounded-3xl" />
      </div>
    </div>
  </div>
);

export default Contact;
