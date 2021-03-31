export const toggleRules = () => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_RULES" });
  } catch (error) {
    console.log(error);
  }
};
