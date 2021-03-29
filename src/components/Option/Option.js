import React from "react";
import "./Option.scss";
export default function Option({
  type,
  borderColor,
  shadowColor,
  optionWidth,
}) {
  return (
    <>
      <div className="optionContainer" style={{ width: `${optionWidth}` }}>
        <div
          className="option"
          style={{
            border: `solid 15px ${borderColor}`,
            boxShadow: `0px 10px 0px ${shadowColor}`,
          }}
        >
          <img src={`/images/icon-${type}.svg`} alt={type} />
        </div>
      </div>
    </>
  );
}
