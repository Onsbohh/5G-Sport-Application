import React, {useEffect, useState} from "react";
import axios from "axios";
import '../styles/LiveStream.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"
import DataPanel from "./DataPanel";
import useWebsocket from "../service/useWebsocket";

export default function LiveStream() {
    const [streaming, setStreaming] = useState(false);
    const [streamFail, setStreamFail] = useState(false)
    const [heartRate, setHeartRate] = useState(null);
    const [ecgData, setEcgData] = useState(null);
    const [videoTimeStamp, setVideoTimeStamp] = useState(null);
    const [date, setDate] = useState(null)
    const { connected, lastMessage } = useWebsocket(process.env.REACT_APP_WEBSOCKET_URL);

    const sensorData = lastMessage ? JSON.parse(lastMessage) : null;
    
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