import React from "react";
import Headshot from "../assets/Online-BC-Headshots-March-2024_0006_Ryan-Angala_IMG_5749.jpg";

function Hero() {
  return (
    <div
      className="container flex justify-between sm:flex-col-reverse md:flex-row mx-auto px-10 py-40
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        backdrop-blur-[5.5px]
        rounded-[10px]
        border
        border-solid
        border-[rgba(255,255,255,0.18)]"
    >
      <div className="container sm:w-full md:w-6/12 flex flex-col align-middle my-auto">
        <h2 className="text-5xl text-gray-300">Hey I'm Ryan.</h2>
        <p className="text-4xl text-gray-300 mt-4 leading-10">
          I'm a{" "}
          <span className="text-blue-400">Frontend Software Engineer</span> with
          a strong passion for building web applications with great user
          experiences. Here's a bit more about me.
        </p>
      </div>
      <div className="container sm:w-full md:w-6/12 ">
        <img className="h-80 w-80 mx-auto rounded-full" src={Headshot} alt="" />
      </div>
    </div>
  );
}

export default Hero;
