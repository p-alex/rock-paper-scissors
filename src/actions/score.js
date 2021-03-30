export const incrementScore = () => async (dispatch) => {
  try {
    dispatch({ type: "INCREMENT_SCORE" });
  } catch (error) {
    console.log(error);
  }
};

export const decrementScore = () => async (dispatch) => {
  try {
    dispatch({ type: "DECREMENT_SCORE" });
  } catch (error) {
    console.log(error);
  }
};
