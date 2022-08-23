import React from "react";
import Network from "./Network";

export default function Header() {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Milan Vlach.</h1>
          <h3>
            I'm a Valencia based <span>Developer</span>. Describtion.
          </h3>
          <hr />
          <ul className="social">
            <Network />
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#portfolio">
          <i class="fa-solid fa-circle-down"></i>
        </a>
      </p>
    </header>
  );
}
