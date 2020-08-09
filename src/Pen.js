import React from "react";

const Pen = props => {
  return (
    <div>
      <p>
        [{props.title}]
      </p>
      <p>Made by: {props.author}</p>
    </div>
  );
};

export default Pen;