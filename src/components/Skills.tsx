import React from "react";

const rowClassName = "my-7 grid gap-5 grid-cols-3 md:grid-cols-6";
const colClassName = "flex flex-col items-center";
const imgClassName = "w-16 m-1";

const Skills: React.FC = () => (
  <div className="Skills" id="skills">
    <h2>Skills &amp; Tools</h2>
    <div className={rowClassName}>
      <div className={colClassName}>
        <img src="./assets/icons/javascript-original.svg" alt="Javascript logo" className={imgClassName} />
        Javascript
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/typescript-original.svg" alt="Typescript logo" className={imgClassName} />
        Typescript
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/react-original.svg" alt="React logo" className={imgClassName} />
        React
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/redux-original.svg" alt="Redux logo" className={imgClassName} />
        Redux
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/nodejs-original.svg" alt="Node logo" className={imgClassName} />
        Node
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/webpack-original.svg" alt="Webpack logo" className={imgClassName} />
        Webpack
      </div>
    </div>

    <div className={rowClassName}>
      <div className={colClassName}>
        <img src="./assets/icons/materialui-original.svg" alt="Material-UI logo" className={imgClassName} />
        Material-UI
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/git-original.svg" alt="Git logo" className={imgClassName} />
        Git
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/heroku-original.svg" alt="Heroku logo" className={imgClassName} />
        Heroku
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/mongodb-original.svg" alt="MongoDB logo" className={imgClassName} />
        MongoDB
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/html5-original.svg" alt="HTML5 logo" className={imgClassName} />
        HTML
      </div>

      <div className={colClassName}>
        <img src="./assets/icons/css3-original.svg" alt="CSS3 logo" className={imgClassName} />
        CSS
      </div>
    </div>
  </div>
);

export default Skills;
