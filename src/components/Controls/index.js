import React from "react";

const Controls = (props) => {
  const { handler } = props;

  return (
    <div className="controls_holder">
      <button onClick={handler}>Do it!</button>
    </div>
  );
};

export default Controls;
