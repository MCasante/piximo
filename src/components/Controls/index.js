import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Controls = (props) => {
  const {
    piximo,
    canvas,
    save,
    pixelSize,
    setPixelSize,
    setFileName,
    setImageData,
  } = props;

  const inputFile = React.createRef();
  const [active, setActive] = React.useState(false);

  function handleChanges(name) {
    setActive(false);
    setTimeout(() => {
      setActive(true);
      setFileName(name);
    }, 1000);
  }

  function handleFile() {
    if (!inputFile.current.files[0]) {
      return;
    }
    const file = inputFile.current.files[0];
    inputFile.current.value = "";

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
        setImageData(ctx.getImageData(0, 0, width, height));
      });

      image.src = fr.result;
    }

    handleChanges(file.name);
  }

  function changePixelSize(value) {
    value = Number(value);
    if (value > 256) {
      value = 256;
    }
    if (value < 1) {
      value = 1;
    }

    setPixelSize(value);
  }

  return (
    <div className="controls_holder">
      <div className="pixel-size-holder">
        <label htmlFor="pixel-size">Set canvas width (px)</label>
        <button
          className="pixel-size-button less"
          onClick={() => changePixelSize(pixelSize - 1)}
        >
          <FontAwesomeIcon icon="minus-circle" />
        </button>
        <input
          id="pixel-size"
          name="pixel-size"
          type="number"
          value={pixelSize}
          onChange={(e) => changePixelSize(e.target.value)}
        />

        <button
          className="pixel-size-button plus"
          onClick={() => changePixelSize(pixelSize + 1)}
        >
          <FontAwesomeIcon icon="plus-circle" />
        </button>
      </div>

      <div className="buttons_holder">
        <input
          type="file"
          className="hidden"
          onChange={handleFile}
          accept="image/*"
          ref={inputFile}
        />

        <button onClick={() => inputFile.current.click()}>
          <FontAwesomeIcon icon="upload" />
          Upload
        </button>
        <button onClick={piximo} disabled={active ? false : true}>
          <FontAwesomeIcon icon="magic" />
          Piximify!
        </button>
        <button onClick={save} disabled={active ? false : true}>
          <FontAwesomeIcon icon="save" />
          Save
        </button>
      </div>
    </div>
  );
};

export default Controls;
