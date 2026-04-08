import React, {useEffect, useState, useRef} from "react";
import '../styles/LiveStream.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"
import DataPanel from "./DataPanel";
import useWebsocket from "../service/useWebSocket";

export default function LiveStream() {
    const [streaming, setStreaming] = useState(false);
    const [heartRate, setHeartRate] = useState(null);
    const [ecgData, setEcgData] = useState(null);
    const [videoTimeStamp, setVideoTimeStamp] = useState(null);
    const [date, setDate] = useState(null)
    const { connected, lastMessage } = useWebsocket(process.env.REACT_APP_WEBSOCKET_URL);
    const videoRef  = useRef(null);
    const pcRef = useRef(null);
    const sensorData = lastMessage ? JSON.parse(lastMessage) : null;
    const [isPublisher, setIsPublisher] = useState(false);
    const [isViewer, setIsViewer] = useState(false);

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

    const checkStreamExists = async () => {
        try {
            // Try to get stream info via WHEP (will fail if no stream)
            const pc = new RTCPeerConnection();
            pc.addTransceiver('video', { direction: 'recvonly' });
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            const response = await fetch(`${process.env.REACT_APP_MEDIAMTX_URL}/camstream/whep`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/sdp' },
                body: offer.sdp
            });

            pc.close();
            return response.ok;
        } catch (error) {
            return false;
        }
    };

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
            setStreaming(true);
            setIsPublisher(true);
            setIsViewer(false);
        } else {
            if (isViewer) {
                alert("Not allowed")
                return;
            }
            pcRef.current.close();
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
            setStreaming(false);
        }
    }

    const startViewing = async () => {
        try {
            // Create peer connection for receiving
            const pc = new RTCPeerConnection();
            pcRef.current = pc;

            // Add transceiver for receiving video only
            pc.addTransceiver('video', { direction: 'recvonly' });

            // Handle incoming stream
            pc.ontrack = (event) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = event.streams[0];
                }
            };

            // Create offer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            // Send to WHEP endpoint
            const response = await fetch(`${process.env.REACT_APP_MEDIAMTX_URL}/camstream/whep`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/sdp'
                },
                body: offer.sdp
            });

            if (!response.ok) {
                throw new Error(`No stream available to watch`);
            }

            const answer = await response.text();
            await pc.setRemoteDescription(new RTCSessionDescription({
                type: 'answer',
                sdp: answer
            }));

            console.log("Now watching the stream");
            setIsViewer(true);
            setIsPublisher(false);
        } catch (error) {
            console.error("Error watching stream:", error);
        }
    };

    useEffect(() => {
        const autoView = async () => {
            const exists = await checkStreamExists();
            if (exists) {
                setStreaming(true);
                console.log("Stream detected, auto-starting viewer");
                await startViewing();
            }
        };
        autoView();
    }, []);

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
                    <video ref={videoRef} autoPlay muted controls style={{width: "100%", height: "100%", borderRadius: "8px", border: "none", backgroundColor: "black"}} />
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