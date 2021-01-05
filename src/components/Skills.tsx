import React from "react";

import javascriptIcon from "../assets/icons/javascript-original.svg";
import typescriptIcon from "../assets/icons/typescript-original.svg";
import reactIcon from "../assets/icons/react-original.svg";
import reduxIcon from "../assets/icons/redux-original.svg";
import nodeIcon from "../assets/icons/nodejs-original.svg";
import webpackIcon from "../assets/icons/webpack-original.svg";
import materialuiIcon from "../assets/icons/materialui-original.svg";
import gitIcon from "../assets/icons/git-original.svg";
import herokuIcon from "../assets/icons/heroku-original.svg";
import mongodbIcon from "../assets/icons/mongodb-original.svg";
import html5Icon from "../assets/icons/html5-original.svg";
import css3Icon from "../assets/icons/css3-original.svg";

const rowClassName = "my-7 grid gap-5 grid-cols-3 md:grid-cols-6";
const colClassName = "flex flex-col items-center";
const imgClassName = "w-16 m-1";

const Skills: React.FC = () => (
  <div className="Skills" id="skills">
    <h2>Skills &amp; Tools</h2>
    <div className={rowClassName}>
      <div className={colClassName}>
        <img src={javascriptIcon} alt="Javascript logo" className={imgClassName} />
        Javascript
      </div>

      <div className={colClassName}>
        <img src={typescriptIcon} alt="Typescript logo" className={imgClassName} />
        Typescript
      </div>

      <div className={colClassName}>
        <img src={reactIcon} alt="React logo" className={imgClassName} />
        React
      </div>

      <div className={colClassName}>
        <img src={reduxIcon} alt="Redux logo" className={imgClassName} />
        Redux
      </div>

      <div className={colClassName}>
        <img src={nodeIcon} alt="Node logo" className={imgClassName} />
        Node
      </div>

      <div className={colClassName}>
        <img src={webpackIcon} alt="Webpack logo" className={imgClassName} />
        Webpack
      </div>

      <div className={colClassName}>
        <img src={materialuiIcon} alt="Material-UI logo" className={imgClassName} />
        Material-UI
      </div>

      <div className={colClassName}>
        <img src={gitIcon} alt="Git logo" className={imgClassName} />
        Git
      </div>

      <div className={colClassName}>
        <img src={herokuIcon} alt="Heroku logo" className={imgClassName} />
        Heroku
      </div>

      <div className={colClassName}>
        <img src={mongodbIcon} alt="MongoDB logo" className={imgClassName} />
        MongoDB
      </div>

      <div className={colClassName}>
        <img src={html5Icon} alt="HTML5 logo" className={imgClassName} />
        HTML
      </div>

      <div className={colClassName}>
        <img src={css3Icon} alt="CSS3 logo" className={imgClassName} />
        CSS
      </div>
    </div>
  </div>
);

export default Skills;
