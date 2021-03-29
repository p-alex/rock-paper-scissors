import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Score.scss";
export default function Score() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  return (
    <div className="score">
      <p>SCORE</p>
      <h1>{score}</h1>
    </div>
  );
}
