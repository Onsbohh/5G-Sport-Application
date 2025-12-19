import ReactPlayer from "react-player"
import {useState} from "react";
import axios from "axios";
import '../styles/LiveStream.css';

export default function LiveStream() {
    const [streaming, setStreaming] = useState(false);

    const streamToggle = async () => {
        if (!streaming) {
            axios.post("http://localhost:5000/start-stream");
            setStreaming(true);
        } else {
            axios.get("http://localhost:5000/stop-stream");
            setStreaming(false);
        }
    }

    return (
        <div style={{width: "100%", maxWidth: "1200px", margin: "0 auto"}}>
            <div className={`stream-container ${!streaming ? "offline" : ""}`}>
                {streaming ? (
                    <iframe
                        src={`http://localhost:8889/camstream?_=${Date.now()}`}
                        allow="autoplay; fullscreen"
                        style={{width: "100%", height: "100%", borderRadius: "8px", border: "none"}}
                    />
                ) : (
                    <div className="offline">
                        <h2>Stream is Offline</h2>
                    </div>
                )}
            </div>
            <button
                onClick={streamToggle}
                className={`stream-btn ${streaming ? "stop" : "start"}`}
            >
                {streaming ? "Stop Stream" : "Start Stream"}
            </button>
        </div>
    );
}