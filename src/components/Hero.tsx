// eslint-disable-next-line import/no-named-default
import { default as animate, default as Lottie } from "lottie-web";
import React, { useEffect, useRef } from "react";
import blobby from "../assets/animations/blobby3.json";

const Hero: React.FC = () => {
  const blobbyContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: blobbyContainer.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: blobby,
    });
    animate.setSpeed(1);
  });

  return (
    <div className="Hero py-32 flex flex-row bg-hero-pattern bg-no-repeat bg-cover bg-right-top">
      <div className="max-w-md my-32">
        <h1>
          Hello World,
          <br />
          I&apos;m Aubrey.
        </h1>
        <p className="tracking-wide leading-relaxed">
          Code drives me.
          I&apos;m fascinated by the natural intersection of design, architecture, and logic.
          Each new project is an adventure.
          Never stop learning.
        </p>
      </div>
      <div className="ml-auto mr-24 w-96">
        <div className="" ref={blobbyContainer} />
      </div>
    </div>
  );
};

export default Hero;
