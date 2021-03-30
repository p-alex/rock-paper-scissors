import "./App.scss";
import Header from "./components/Header/Header";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";
import { useSelector } from "react-redux";
import Result from "./components/Result/Result";
import Footer from "./components/Footer/Footer";
function App() {
  const option = useSelector((state) => state.option);
  return (
    <div className="App">
      <Header />
      {!option ? <RockPaperScissors /> : <Result />}
      <Footer />
    </div>
  );
}

export default App;
