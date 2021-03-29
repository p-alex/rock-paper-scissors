export default (score = 0, action) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return score++;
    case "DECREMENT_SCORE":
      return score--;
    default:
      return score;
  }
};
