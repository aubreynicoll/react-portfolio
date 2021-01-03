import React from 'react';

const Header: React.FC = () => {
  const linkClassName = "py-1 px-5 hover:bg-gray rounded-lg";

  return (
    <div className="Header m-10 py-10">
      <nav>
        <ul className="flex flex-row space-x-4 md:space-x-10 justify-center md:justify-end font-thin">
          <li>
            <a href="#projects" className={linkClassName}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={linkClassName}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={linkClassName}>
              Contact
            </a>
          </li>
          <li>
            <a href="./assets/pdfs/Resume - Aubrey Nicoll.pdf" target="_blank" rel="noreferrer" className={linkClassName}>
              Resume
            </a>
          </li>
        </ul>
      </nav>            
    </div>
  );
};

export default Header;