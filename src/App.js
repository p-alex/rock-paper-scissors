import "./App.scss";
import Header from "./components/Header/Header";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";
import { useSelector, useDispatch } from "react-redux";
import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";
import RulesPopUp from "./components/RulesPopUp/RulesPopUp";
import { toggleRules } from "./actions/toggleRules";
const App = () => {
  const option = useSelector((state) => state.option);
  const dispatch = useDispatch();
  return (
    <>
      <RulesPopUp />
      <div className="App">
        <Header />
        {!option ? <RockPaperScissors /> : <Result />}
        <Footer />
      </div>
      <button className="rulesButton" onClick={() => dispatch(toggleRules())}>
        RULES
      </button>
    </>
  );
};

export default App;
