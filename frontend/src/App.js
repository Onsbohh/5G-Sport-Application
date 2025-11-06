import './App.css';
import Rectangle from "./components/Rectangle";
import Menu from "./components/Menu";

function App() {
  return (
      <div className="App">
          <h1>5G Sport</h1>
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}>
              <Menu/>
              <Rectangle/>
          </div>
      </div>
  );
}

export default App;
