import React from "react";
import pokebookScreenshot from "../assets/images/pokebook_screenshot.png";

const Projects: React.FC = () => (
  <div className="Projects" id="projects">
    <h2>Projects</h2>
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="bg-project-pattern-1 bg-bottom bg-no-repeat bg-auto bg-center w-full md:w-6/12 rounded-md">
          <img src={pokebookScreenshot} alt="Pokebook screenshot" className="px-8 md:px-12 py-6 md:py-8" />
        </div>
        <div className="flex flex-col max-w-md space-y-5">
          <h3>PokéBook</h3>
          <p>
            Pokémon-themed social media platform,
            built with React, Typescript, GraphQL, and MongoDB.
            Deployed with GitHub Actions and Heroku.
          </p>
          <div className="flex flex-row space-x-4">
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              React
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              GraphQL
            </span>
            <span className="border border-gray-500 px-2 py-1 rounded-lg text-sm">
              MongoDB
            </span>
          </div>
        </div>
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
