import React, {useEffect, useState} from "react";
import axios from "axios";
import '../styles/LiveStream.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"
import DataPanel from "./DataPanel";

export default function LiveStream() {
    const [streaming, setStreaming] = useState(false);
    const [heartRate, setHeartRate] = useState(null);
    const [ecgData, setEcgData] = useState(null);
    const [videoTimeStamp, setVideoTimeStamp] = useState(null);

    const [date, setDate] = useState(null)

    const streamToggle = async () => {
        if (!streaming) {
            setDate(Date.now())
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
            // const timestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
            let timestamp = 1609459721 // temporary for testing
            setVideoTimeStamp(timestamp);
            console.log("Fetching sensor data for timestamp: ", timestamp);
            /*
            const heartRateData = await getHeartRateByTimestamp(timestamp,timestamp);
            const ecgData = await getEcgByTimestamp(timestamp,timestamp);

             */

            // placeholders to show data because data with video timestamps
            // doesn't seem to exist
            const heartRateData = await getHeartRateByTimestamp(1609462507,1770640728);
            const ecgData = await getEcgByTimestamp(1609459721,1609459723);

            if (heartRateData.length === 0 || ecgData.length === 0) {
                console.log("No sensor data available for this timestamp.");
                return;
            }
            console.log('ecgdata:', ecgData)
            setHeartRate(heartRateData);
            setEcgData(ecgData);
        }
        catch (error) {
            console.error("Error fetching sensor data: ", error);
        }
    }

    useEffect(() => {
        if (streaming) {
            const interval = setInterval(() => {
                fetchSensorData();
            }, 1000); // Fetch data every second
            return () => clearInterval(interval);
        }
    }, [streaming]);

    return (
        <>
            <div style={
                {
                    width: "100%",
                    maxWidth: "1500px",
                    margin: "auto",
                    display: "flex",
                    height: "500px"
                }}>
                <div className={`stream-container `}>
                    <iframe
                        src={`http://localhost:8889/camstream?_=${date}`}
                        allow="fullscreen"
                        style={{width: "100%", height: "100%", borderRadius: "8px", border: "none"}}
                    />
                </div>
                <DataPanel
                    title={"Sensor Data"}
                    hr={{data: heartRate}}
                    ecg={{data: ecgData}}
                    timeStamp={videoTimeStamp}
                />
            </div>
            <div style={{
                justifyContent: "center"
            }}>
                <button
                    onClick={streamToggle}
                    className={`stream-btn ${streaming ? "stop" : "start"}`}
                >
                    {streaming ? "Stop Stream" : "Start Stream"}
                </button>
            </div>
        </>

    );
}