export default (score = 0, action) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return (score = score + 1);
    case "DECREMENT_SCORE":
      let updatedScore = score - 1;
      if (updatedScore < 0) {
        updatedScore = 0;
      }
      return updatedScore;
    default:
      return score;
  }
};
