export const incrementScore = () => async (dispatch) => {
  try {
    dispatch({ type: "INCREMENT_SCORE" });
  } catch (error) {
    console.log(error);
  }
};
