import React from "react";
import "./style.css";

import piximoTool from "../../utils/piximo-tool";

import Controls from "../Controls";

const Canvas = (props) => {
  const canvas = React.createRef();

  const [pixelSize, setPixelSize] = React.useState(64);
  const [fileName, setFileName] = React.useState("");

  function piximo() {
    piximoTool.piximo(canvas.current, pixelSize);
  }

  function saveImage() {
    const image = canvas.current.toDataURL("image/png");
    const a = document.createElement("a");

    const name = fileName.replace(/\.[^/.]+$/, "");

    a.download = `${name}-piximo`;
    a.href = image;
    a.click();
  }

  return (
    <div className="wrapper">
      <div className="canvas_holder">
        <canvas ref={canvas}></canvas>
      </div>
      <Controls
        canvas={canvas}
        piximo={piximo}
        pixelSize={pixelSize}
        setPixelSize={setPixelSize}
        save={saveImage}
        setFileName={setFileName}
      />
    </div>
  );
};

export default Canvas;
