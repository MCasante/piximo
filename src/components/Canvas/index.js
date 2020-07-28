import React from "react";
import "./style.css";

import Controls from "../Controls";

const Canvas = (props) => {
  return (
    <div className="wrapper">
      <div className="canvas_holder">
        <canvas></canvas>
      </div>
      <Controls />
    </div>
  );
};

export default Canvas;
