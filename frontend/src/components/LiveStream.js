import ReactPlayer from "react-player"
import {useEffect, useState} from "react";
import axios from "axios";
import '../styles/LiveStream.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"

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

    // Fetch sensor data every second when streaming on current timestamp
    const fetchSensorData = async () => {
        try {
            const timestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
            console.log("Fetching sensor data for timestamp: ", timestamp);
            const heartRateData = await getHeartRateByTimestamp(timestamp);
            const ecgData = await getEcgByTimestamp(timestamp);
            console.log("Heart Rate Data: ", heartRateData);
            console.log("ECG Data: ", ecgData);
        }
        catch (error) {
            console.error("Error fetching sensor data: ", error);
        }
    }

    useEffect(() => {
        if (streaming) {
            const interval = setInterval(() => {
                fetchSensorData().then(r => console.log("Sensor data fetched"));
            }, 1000); // Fetch data every second
            return () => clearInterval(interval);
        }
    }, [streaming]);

    return (
        <div style={{width: "100%", maxWidth: "1200px", margin: "0 auto"}}>
            <div className={`stream-container ${!streaming ? "offline" : ""}`}>
                {streaming ? (
                    <iframe
                        src={`http://localhost:8889/camstream?_=${Date.now()}`}
                        allow="fullscreen"
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