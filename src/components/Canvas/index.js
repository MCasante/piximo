import React from "react";
import "./style.css";

import Controls from "../Controls";

const canvas = React.createRef();

function loadImage() {}

const Canvas = (props) => {
  return (
    <div className="wrapper">
      <div className="canvas_holder">
        <canvas ref={canvas}></canvas>
      </div>
      <Controls canvas={canvas} />
    </div>
  );
};

export default Canvas;
