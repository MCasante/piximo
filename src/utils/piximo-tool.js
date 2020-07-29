const piximoTools = {
  getOccurrences(arr) {
    const occurrences = {};

    arr.forEach((item) =>
      occurrences.hasOwnProperty(item)
        ? (occurrences[item] += 1)
        : (occurrences[item] = 1)
    );

    return Object.entries(occurrences);
  },
  convertImageData(imageData) {
    const length = imageData.length / 4;

    const pixels = [];

    for (let i = 0; i < length; i++) {
      const r = imageData[i * 4 + 0];
      const g = imageData[i * 4 + 1];
      const b = imageData[i * 4 + 2];
      const a = imageData[i * 4 + 3];

      pixels.push(`${r},${g},${b},${a}`);
    }
    return pixels;
  },
  populateArray(value = null, length = 100) {
    return Array.from({ length }).map((_) => value);
  },
};

export default {
  piximo(canvas, imageWidth) {
    const width = canvas.width;
    const height = canvas.height;

    const pixelSize = Math.floor(width / imageWidth);

    const rowLength = width / pixelSize;
    const columnLength = (height * rowLength) / width;

    const ctx = canvas.getContext("2d");
    const size = pixelSize;

    function createPixel(posX, posY, size) {
      const slice = ctx.getImageData(posX, posY, size, size);
      const converted = piximoTools.convertImageData(slice.data);
      const occurrences = piximoTools.getOccurrences(converted);
      const mostCommom = occurrences
        .filter((color) => color[0] !== "0,0,0,0")
        .reduce((color, next) => (color[1] >= next[1] ? color : next));

      const pixel = piximoTools.populateArray(
        mostCommom[0],
        slice.data.length / 4
      );
      const pixelReady = pixel
        .map((color) => color.split(","))
        .reduce((arr, next) => arr.concat(next));
      const newPixel = new ImageData(
        Uint8ClampedArray.from(pixelReady),
        slice.width,
        slice.height
      );
      ctx.putImageData(newPixel, posX, posY);
    }

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < columnLength; j++) {
        setTimeout(() => {
          createPixel(i * size, j * size, size);
        }, 100);
      }
    }
  },
};
