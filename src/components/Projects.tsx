import React from "react";
import pokebookScreenshot from "../assets/images/pokebook-mockup.png";
import martinsMoviesScreenshot from "../assets/images/martins-movies-mockup.png";
import githubIcon from "../assets/icons/github.svg";
import linkIcon from "../assets/icons/link.svg";

const Projects: React.FC = () => (
  <div className="Projects" id="projects">
    <h2>Projects</h2>
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <img src={pokebookScreenshot} alt="Pokebook screenshot" className="px-8 md:px-12 py-6 md:py-8 max-w-xl" />
        <div className="flex flex-col max-w-md space-y-5">
          <h3>PokéBook</h3>
          <p>
            Pokémon Pokédex, currently expanding into a faux social media platform.
            Built with React, Typescript, and GraphQL.
            Deployed with GitHub Actions and Heroku.
          </p>
          <div className="flex flex-row space-x-4">
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              React
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              Typescript
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              GraphQL
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              MongoDB
            </span>
          </div>
          <div className="w-auto flex space-x-5 relative">
            <a href="https://github.com/aubreynicoll/pokebook" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Link to GitHub" width="24px" height="24px" />
            </a>
            <a href="https://young-lowlands-97512.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt="Link to App" width="24px" height="24px" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col max-w-md space-y-5">
          <h3>Martin&apos;s Movies</h3>
          <p>
            Fast, fully searchable, cross-browser compatible movie database.
            Built with React, Javascript, and Bootstrap.
            Deployed with GitHub Actions and Heroku.
          </p>
          <div className="flex flex-row space-x-4">
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              React
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              Javascript
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              Axios
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              REST API
            </span>
          </div>
          <div className="w-auto flex space-x-5 relative">
            <a href="https://github.com/aubreynicoll/martins-movies" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Link to GitHub" width="24px" height="24px" />
            </a>
            <a href="https://gentle-reaches-49866.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt="Link to App" width="24px" height="24px" />
            </a>
          </div>
        </div>
        <img src={martinsMoviesScreenshot} alt="Martin's movies screenshot screenshot" className="px-8 md:px-12 py-6 md:py-8 max-w-xl" />
      </div>
      <a href="https://github.com/aubreynicoll" target="_blank" rel="noreferrer">
        <span className="bg-gray block uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto">
          See more on Github
        </span>
      </a>
    </div>
  </div>
);

export default Projects;
