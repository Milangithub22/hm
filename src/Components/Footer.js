import React from "react";
import Network from "./Network";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <Network />
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2022 Milan Vlach</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i class="fa-solid fa-circle-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
