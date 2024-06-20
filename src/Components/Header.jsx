import React from "react";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import resumeIcon from "../assets/cv.svg";

function Header() {
  return (
    <div>
      <header
        className="container mx-auto px-10 flex mb-20 bg-[rgba(255,255,255,0.05)]
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  backdrop-blur-[5.5px]
  rounded-[10px]
  border
  border-solid
  border-[rgba(255,255,255,0.18)]"
      >
        <div className="container flex justify-between content-center mt-4 mb-4 mx-auto w-full">
          <ul className="md:flex space-x-10 sm:hidden">
            <a href="">
              <li
                className="list-none text-2xl text-gray-300"
                onClick={(e) => {
                  window.location.href = "mailto:ryanjangala@gmail.com";
                }}
              >
                Contact Me
              </li>
            </a>
          </ul>

          <ul className="flex space-x-10 sm:mx-auto md:mx-0">
            <a href="../assets/Ryan Angala-Resume.pdf" target="_blank">
              <li className="list-none ">
                <img
                  className="w-10 h-10 text-gray-200"
                  src={resumeIcon}
                  alt=""
                />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/ryan-angala" target="_blank">
              <li className="list-none ">
                <img
                  className="w-10 h-10 fill-current text-gray-300"
                  src={linkedInLogo}
                  alt=""
                />
              </li>
            </a>
            <a href="https://github.com/ryanangala3" target="_blank">
              <li className="list-none ">
                <img className="w-10 h-10" src={githubLogo} alt="" />
              </li>
            </a>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
