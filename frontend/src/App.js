import './App.css';
import Rectangle from "./components/Rectangle";

function App() {
  return (
      <div className="App">
          <h1>5G Sport</h1>
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}>
              <Rectangle/>
          </div>
      </div>
  );
}

export default App;
