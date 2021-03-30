import React from "react";
import Option from "../Option/Option";
import "./RockPaperScissors.scss";

import { useSelector, useDispatch } from "react-redux";

import { setOption } from "../../actions/option";
export default function RockPaperScissors() {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.option);
  const handleSetOption = (option) => {
    dispatch(setOption(option));
  };
  const optionList = ["paper", "scissors", "rock"];
  return (
    <>
      {!option ? (
        <div
          className="rockPaperScissors"
          style={{ backgroundImage: 'url("/images/bg-triangle.svg")' }}
        >
          {optionList.map((item, id) => {
            return (
              <Option
                key={id}
                type={item}
                handleClick={() => handleSetOption(item)}
                optionWidth={id < 2 ? "50%" : "100%"}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
}
