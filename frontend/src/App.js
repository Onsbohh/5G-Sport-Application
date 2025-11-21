import './App.css';
import DashBoard from "./components/DashBoard";
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
              <DashBoard/>
          </div>
      </div>
  );
}

export default App;
