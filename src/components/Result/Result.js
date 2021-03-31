import React, { useState, useEffect } from "react";
import "./Result.scss";
import Option from "../Option/Option";
import { useSelector, useDispatch } from "react-redux";
import { resetOption } from "../../actions/option";
import { incrementScore, decrementScore } from "../../actions/score";
export default function Result() {
  const option = useSelector((state) => state.option);
  const dispatch = useDispatch();

  const [houseResult, setHouseResult] = useState("");
  const [gameResult, setGameResult] = useState("");

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let value = Math.floor(Math.random() * (max - min) + min);
    if (value === 1) {
      setHouseResult("paper");
    } else if (value === 2) {
      setHouseResult("scissors");
    } else if (value === 3) {
      setHouseResult("rock");
    }
  };

  useEffect(() => {
    if (option) {
      setTimeout(() => getRandomInt(1, 4), 1000);
    }
  }, [option]);

  useEffect(() => {
    if (option && houseResult) {
      if (option === houseResult) {
        setGameResult("Tie!");
        return;
      }
      if (
        (option === "scissors" && houseResult === "paper") ||
        (option === "paper" && houseResult === "rock") ||
        (option === "rock" && houseResult === "scissors")
      ) {
        setGameResult("You Won!");
        dispatch(incrementScore());
        return;
      } else {
        setGameResult("You Lost!");
        dispatch(decrementScore());
        return;
      }
    }
  }, [houseResult, option, dispatch]);

  return (
    <>
      <div className="result">
        <div className="optionOwner">
          <p>You picked</p>
          <Option type={option} />
        </div>

        <div className="result_displayResultContainer">
          {option && houseResult ? (
            <>
              <h1>{gameResult}</h1>
              {gameResult ? (
                <button onClick={() => dispatch(resetOption())}>
                  Play Again!
                </button>
              ) : null}
            </>
          ) : null}
        </div>
        <div className="optionOwner">
          <p>The house picked</p>
          {!houseResult ? (
            <div className="placeholder"></div>
          ) : (
            <Option type={houseResult} />
          )}
        </div>
      </div>
    </>
  );
}
