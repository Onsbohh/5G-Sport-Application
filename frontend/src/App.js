import './App.css';
import DashBoard from "./components/DashBoard";
import Menu from "./components/Menu";
import PlayerList from "./components/PlayerList";
import HeartRatePopup from "./components/HeartRatePopup";
import LiveStream from "./components/LiveStream";
import VideoPlayer from "./components/VideoPlayer"
import React, {useState} from "react";
import Calendar from "./components/Calendar";
import language_icon from "./images/language_icon.svg"
import darkmode_icon from "./images/darkmode_icon.svg"


const App = () => {
  const [showStream, setShowStream] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
      <div className="App">
          <header className="App-header">
              <h1>5G Sport</h1>
              <div className="Side-menu">
                  <button className="Language-button">
                      <img
                          src={language_icon}
                          alt="Language icon"
                          style={{
                              height: "25px",
                              width: "25px"
                          }}
                      />
                  </button>
                  <button className="Darkmode_button">
                      <img
                        src={darkmode_icon}
                        alt="Darkmode icon"
                        style={{
                            height: "25px",
                            width: "25px"
                        }}
                      />
                  </button>
              </div>
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
