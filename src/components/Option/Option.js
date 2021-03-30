import React from "react";
import "./Option.scss";
export default function Option({ type, optionWidth, handleClick }) {
  const optionList = [
    {
      type: "paper",
      borderColor: "hsl(230, 89%, 65%)",
      shadowColor: "hsl(230, 89%, 62%)",
    },
    {
      type: "scissors",
      borderColor: "hsl(40, 84%, 53%)",
      shadowColor: "hsl(39, 89%, 49%)",
    },
    {
      type: "rock",
      borderColor: "hsl(349, 70%, 56%)",
      shadowColor: "hsl(349, 71%, 52%)",
    },
  ];
  return (
    <>
      {optionList.map((item, id) => {
        if (item.type === type) {
          return (
            <div
              className="optionContainer"
              style={{ width: `${optionWidth}` }}
              onClick={handleClick}
              key={id}
            >
              <div
                className="option"
                style={{
                  border: `solid 15px ${item.borderColor}`,
                  boxShadow: `0px 10px 0px ${item.shadowColor}`,
                }}
              >
                <img src={`/images/icon-${item.type}.svg`} alt={item.type} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
