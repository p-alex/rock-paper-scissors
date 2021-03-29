import React from "react";
import Option from "../Option/Option";
import "./RockPaperScissors.scss";
export default function RockPaperScissors() {
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
    <div
      className="rockPaperScissors"
      style={{ backgroundImage: 'url("/images/bg-triangle.svg")' }}
    >
      {optionList.map((item, id) => {
        return (
          <Option
            type={item.type}
            borderColor={item.borderColor}
            shadowColor={item.shadowColor}
            optionWidth={id < 2 ? "50%" : "100%"}
          />
        );
      })}
    </div>
  );
}
