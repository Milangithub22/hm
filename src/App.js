import React, { useState } from "react";
import "./App.css";
// import MouseParticles from "react-mouse-particles";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

export default function App() {
  const [lang, setLang] = useState(false);

  function english() {
    setLang(true);
    console.log("en");
  }
  function espanol() {
    setLang(false);
    console.log("es");
  }

  return (
    <div className="App">
      {/* <MouseParticles
        g={1}
        color="white"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
        radius={5}
        tha={10}
      /> */}
      <Header one={english} two={espanol} data={lang} />
      <Portfolio data={lang} />
      <Contact data={lang} />
      <Footer data={lang} />
    </div>
  );
}
