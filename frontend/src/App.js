import './App.css';
import DashBoard from "./components/DashBoard";
import Menu from "./components/Menu";
import PlayerList from "./components/PlayerList";
import HeartRatePopup from "./components/HeartRatePopup";
import LiveStream from "./components/LiveStream";
import VideoPlayer from "./components/VideoPlayer"
import {useState} from "react";


const App = () => {
  const [showStream, setShowStream] = useState(true);

  return (
      <div className="App">
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}>
          <button
                onClick={() => setShowStream(!showStream)}
                className="toggle-btn"
            >
                {showStream ? "Show Recorded Video" : "Show Livestream"}
            </button>
          </div>
          <div className="content">
              {showStream ? <LiveStream /> : <VideoPlayer />}
              <DashBoard/>
          </div>

      </div>
  );
}

export default App;
