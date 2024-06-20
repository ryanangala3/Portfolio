import React from "react";
import htmlLogo from "../assets/html-1.svg";
import cssLogo from "../assets/css-3.svg";
import jsLogo from "../assets/javascript-1.svg";
import reactLogo from "../assets/react-js-1.svg";
import mySQLLogo from "../assets/mysql.png";
import nodeLogo from "../assets/node-js.svg";
import expressLogo from "../assets/express.svg";
import tailwindLogo from "../assets/tailwind-css.svg";

function Skills() {
  return (
    <div
      className="container mx-auto py-4 px-24 flex flex-col justify-center align-middle border-black-500 mt-20 bg-[rgba(255,255,255,0.05)]
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        backdrop-blur-[5.5px]
        rounded-[10px]
        border
        border-solid
        border-[rgba(255,255,255,0.18)]
    "
    >
      <h3 className="text-6xl mx-auto text-gray-300">
        Languages & Frameworks:
      </h3>
      <ul className="container flex flex-wrap justify-between align-middle mt-14 pb-10 space-y-10">
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40 mt-10" src={htmlLogo} alt="HTML" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={cssLogo} alt="CSS" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={jsLogo} alt="JavaScript" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={reactLogo} alt="React" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={nodeLogo} alt="Node.JS" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={expressLogo} alt="Express" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={mySQLLogo} alt="MySQL" />
        </li>
        <li className="list-none sm:w-1/2 md:w-1/4 flex flex-col items-center">
          <img className="w-40 h-40" src={tailwindLogo} alt="MySQL" />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
