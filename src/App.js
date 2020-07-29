import React from "react";
import "./App.css";
import logo from "./assets/images/logo.png";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Canvas from "./components/Canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Header logo={logo} logoText="Piximo!"></Header>
      <main>
        <section className="intro">
          <h2>
            My cat is a magician!
            <br />
            <FontAwesomeIcon icon="cat" />
            <FontAwesomeIcon icon="magic" />
          </h2>

          <p>He will piximify any image uploaded here! Just give it a try.</p>
        </section>

        <Canvas />
      </main>
      <Footer>
        Made by &nbsp;
        <a
          href="https://github.com/MCasante"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mcasante
        </a>
      </Footer>
    </div>
  );
}

export default App;
