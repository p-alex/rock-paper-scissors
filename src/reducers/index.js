import { combineReducers } from "redux";
import score from "./score";
import option from "./option";
import toggleRules from "./toggleRules";
export default combineReducers({
  score,
  option,
  toggleRules,
});
