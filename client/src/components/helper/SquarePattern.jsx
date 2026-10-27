import React from "react";

function SquarePattern({ patternIdx }) {
  return (
    <div
      className={`aspect-square rounded-2xl bg-primary/10 ${patternIdx % 2 === 0 ? "animate-pulse" : ""}`}
    />
  );
}

export default SquarePattern;
