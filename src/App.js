import React from "react";
import "./App.css";
import logo from "./assets/images/logo.png";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <Header logo={logo} logoText="Piximo"></Header>
      <main>
        <Canvas />
      </main>
      <Footer>Made by @mcasante</Footer>
    </div>
  );
}

export default App;
