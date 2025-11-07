import './App.css';
import Rectangle from "./components/Rectangle";
import Menu from "./components/Menu";
import PlayerList from "./components/PlayerList";
import HeartRatePopup from "./components/HeartRatePopup";

const App = () => {
  return (
      <div className="App">
          <header className="App-header">
              <h1>5G Sport</h1>
          </header>

          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}>
              <Menu/>
              <Rectangle/>
              <PlayerList team={"team 1"}/>
              <PlayerList team={"team 2"}/>
          </div>
      </div>
  );
}

export default App;
