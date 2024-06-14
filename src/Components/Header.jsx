import React from "react";
import logo from "../assets/R.png";

function Header() {
  return (
    <div>
      <header className="flex">
        <div className="container flex justify-between">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <ul className="flex justify-around">
            <li className="list-none">About Me</li>
            <li className="list-none">Projects</li>
            <li className="list-none">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
