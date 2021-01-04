// eslint-disable-next-line import/no-named-default
import { default as animate, default as Lottie } from "lottie-web";
import React, { useEffect, useRef } from "react";
import animationData from "../assets/animations/flower3.json";

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });
    animate.setSpeed(1);
  }, []);

  return (
    <div className="Hero my-10 max-w-md space-y-5">
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
  );
};

export default Hero;
