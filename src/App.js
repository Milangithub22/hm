import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

export default function App() {
  const [lang, setLang] = useState(true);

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
      <Header one={english} two={espanol} data={lang} />
      <Portfolio data={lang} />
      <Contact data={lang} />
      <Footer data={lang} />
    </div>
  );
}
