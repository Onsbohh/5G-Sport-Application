import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import '../styles/LiveStream.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"
import DataPanel from "./DataPanel";
import useWebsocket from "../service/useWebSocket";

export default function LiveStream() {
    const [streaming, setStreaming] = useState(false);
    const [streamFail, setStreamFail] = useState(false)
    const [heartRate, setHeartRate] = useState(null);
    const [ecgData, setEcgData] = useState(null);
    const [videoTimeStamp, setVideoTimeStamp] = useState(null);
    const [date, setDate] = useState(null)
    const { connected, lastMessage } = useWebsocket(process.env.REACT_APP_WEBSOCKET_URL);
    const videoRef  = useRef(null);
    const pcRef = useRef(null);
    const sensorData = lastMessage ? JSON.parse(lastMessage) : null;

    useEffect(() => {
        if (sensorData) {
            setSensorData(sensorData);
        }
    }, [lastMessage]);

    const setSensorData = (data) => {
        if (data.topic === "sensors/ecg") {
            const parsedPayload =
                typeof data.payload === "string"
                    ? JSON.parse(data.payload)
                    : data.payload;
            setEcgData(parsedPayload);
        } else if (data.topic === "sensors/hr") {
            const parsedPayload =
                typeof data.payload === "string"
                    ? JSON.parse(data.payload)
                    : data.payload;
             setHeartRate(parsedPayload);
        }
    }
    
    const streamToggle = async () => {
        if (!streaming) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            videoRef.current.srcObject = stream;

            const pc = new RTCPeerConnection();
            pcRef.current = pc;
            stream.getTracks().forEach(track => pc.addTrack(track, stream));

            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            const response = await fetch(`${process.env.REACT_APP_MEDIAMTX_URL}/camstream/whip`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/sdp'
                },
                body: offer.sdp
            });
            const answer = await response.text();
            await pc.setRemoteDescription(new RTCSessionDescription({
                type: 'answer',
                sdp: answer
            }));
            //axios.post(`${process.env.REACT_APP_STREAM_SERVER_URL}/start-stream`);
            setStreaming(true);
        } else {
            pcRef.current.close();
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
            //axios.get(`${process.env.REACT_APP_STREAM_SERVER_URL}/stop-stream`);
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
                    <video ref={videoRef} autoPlay muted style={{width: "100%", height: "100%", borderRadius: "8px", border: "none"}} />
                </div>
                <DataPanel
                    title={"Sensor Data"}
                    hr={heartRate}
                    ecg={ecgData}
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