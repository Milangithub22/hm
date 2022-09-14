import React from "react";
import Network from "./Network";
import Languages from "./Languages";

export default function Header({ one, two, data }) {
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
              {data ? "Home" : "Inicio"}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              {data ? "Projects" : "Proyectos"}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              {data ? "Contact" : "Contacto"}
            </a>
          </li>
          <li id="lan">
            <Languages one={one} two={two} />
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {data ? "I am Milan Vlach" : "Yo soy Milan Vlach"}
          </h1>
          <h3>
            {data
              ? "I'm a Developer based in Spain"
              : "Soy un Desarrollador basado en España."}
            I'm incredibly passionate about creating innovative applications and engaging user interfaces. 
I am a person who keeps things organized, solves problems, and works independently with great attention to detail. Enthusiast of all sports.
Working on challenging projects with inspiring individuals and being interested in the entire frontend spectrum. 
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
