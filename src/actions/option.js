export const setOption = (option) => async (dispatch) => {
  try {
    dispatch({ type: "SET_OPTION", payload: option });
  } catch (error) {
    console.log(error);
  }
};

export const resetOption = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_OPTION" });
  } catch (error) {
    console.log(error);
  }
};
