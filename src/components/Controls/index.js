import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Controls = (props) => {
  const { pixelify, canvas, save } = props;

  const inputFile = React.createRef();

  function handleFile() {
    const file = inputFile.current.files[0];
    const fr = new FileReader();
    fr.addEventListener("load", createImage);
    fr.readAsDataURL(file);

    function createImage() {
      const image = new Image();

      image.addEventListener("load", () => {
        const width = canvas.current.clientWidth;
        const height = (image.height * width) / image.width;

        canvas.current.width = width;
        canvas.current.height = height;

        const ctx = canvas.current.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
      });

      image.src = fr.result;
    }
    console.log(file);
  }

  return (
    <div className="controls_holder">
      <input
        type="file"
        className="hidden"
        onChange={handleFile}
        accept="image/*"
        ref={inputFile}
      />
      <button onClick={() => inputFile.current.click()}>
        <FontAwesomeIcon icon="upload" />
        Upload File
      </button>
      <button onClick={pixelify}>
        <FontAwesomeIcon icon="magic" />
        Piximo it!
      </button>
      <button onClick={save}>
        <FontAwesomeIcon icon="save" />
        Save
      </button>
    </div>
  );
};

export default Controls;
