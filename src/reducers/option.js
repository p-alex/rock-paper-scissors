export default (option = "", action) => {
  switch (action.type) {
    case "SET_OPTION":
      return action.payload;
    case "RESET_OPTION":
      return "";
    default:
      return option;
  }
};
