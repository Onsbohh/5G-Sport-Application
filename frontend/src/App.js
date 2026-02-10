import './App.css';
import DashBoard from "./components/DashBoard";
import Menu from "./components/Menu";
import PlayerList from "./components/PlayerList";
import HeartRatePopup from "./components/HeartRatePopup";
import LiveStream from "./components/LiveStream";
import VideoPlayer from "./components/VideoPlayer"
import React, {useState} from "react";
import Calendar from "./components/Calendar";


const App = () => {
  const [showStream, setShowStream] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
      <div className="App">
          <header className="App-header">
              <h1>5G Sport</h1>
          </header>
          <div className="content">
              <button
                  onClick={() => setShowStream(!showStream)}
                  className="toggle-btn"
              >
                  {showStream ? "Show Recorded Video" : "Show Livestream"}
              </button>
              {showStream ? <LiveStream/> : <VideoPlayer selectedDate={selectedDate}/>}
              <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate}/>
              <DashBoard/>
          </div>

          <footer className="footer">
              .
          </footer>
      </div>
  );
}

export default App;
