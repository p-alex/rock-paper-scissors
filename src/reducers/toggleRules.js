export default (rules = false, action) => {
  switch (action.type) {
    case "TOGGLE_RULES":
      return (rules = !rules);
    default:
      return rules;
  }
};
