import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
