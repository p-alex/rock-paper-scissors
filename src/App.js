import "./App.scss";
import Header from "./components/Header/Header";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <RockPaperScissors />
      <Footer />
    </div>
  );
}

export default App;
