import React from "react";
import logo from "../assets/R.png";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import resumeIcon from "../assets/cv.svg";

function Header() {
  return (
    <div>
      <header className="flex">
        <div className="container flex justify-between content-center mt-4 mb-4 mx-auto">
          <ul className="flex space-x-10">
            <li className="list-none text-2xl text-gray-300">About Me</li>
            <li className="list-none text-2xl text-gray-300">Projects</li>
            <li className="list-none text-2xl text-gray-300">Contact Me</li>
          </ul>
          <div className="">
            <ul className="flex space-x-10">
              <a href="">
                <li className="list-none ">
                  <img
                    className="w-10 h-10 text-gray-200"
                    src={resumeIcon}
                    alt=""
                  />
                </li>
              </a>
              <a href="">
                <li className="list-none ">
                  <img
                    className="w-10 h-10 fill-current text-gray-300"
                    src={linkedInLogo}
                    alt=""
                  />
                </li>
              </a>
              <a href="">
                <li className="list-none ">
                  <img className="w-10 h-10" src={githubLogo} alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
