import React, {useRef, useState} from "react";
import ReactPlayer from "react-player"
import '../styles/VideoPlayer.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"
import DataPanel from "./DataPanel";

export default function VideoPlayer () {
    const [videoURL, setVideoURL] = useState(null);
    const [videoName, setVideoName] = useState(null);
    let videoRef = useRef(null);
    let videoTimeStamp = useRef(null);
    const [heartRate, setHeartRate] = useState(null);
    const [ecgData, setEcgData] = useState(null);


    const chooseVideo = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const name = file.name;
        setVideoName(name.replace(/\.[^/.]+$/, "")); // Remove file extension

        const url = URL.createObjectURL(file);
        setVideoURL(url);
    }

    const fetchHeartRate = async (timestamp) => {
        try {
            const dataEcg = await getEcgByTimestamp(timestamp);
            const dataHr = await getHeartRateByTimestamp(timestamp);
            console.log("Ecg Data: ", dataEcg);

            setEcgData(dataEcg);
            setHeartRate(dataHr);

            console.log("Heart Rate Data: ", dataHr);
        } catch (error) {
            console.error("Error fetching heart rate data: ", error);
        }
    }



    return (
        <div style={{width: "100%", maxWidth: "1200px", margin: "0 auto"}}>
            <div className="video-container">
                <ReactPlayer
                    src={videoURL}
                    controls={true}
                    style={{width: "100%", height: "100%", borderRadius: "8px", border: "none"}}
                    //Gives videos time when it changes
                    onTimeUpdate={(e) => {
                        console.log(videoName);
                        videoTimeStamp = (Number(videoName) + Math.round(e.target.currentTime));
                        console.log("Video timestamp: ", videoTimeStamp);
                        fetchHeartRate(videoTimeStamp);
                    }}
                    onPlaying={(e) => {
                        console.log("playing: ", e);
                    }}
                />
                <button className={"video-btn"}
                    onClick={() => videoRef.current.click()}
                    >
                    VOD
                </button>
                <input
                    type="file"
                    accept="video/*"
                    ref={videoRef}
                    style={{display: "none"}}
                    onChange={chooseVideo}
                />

            </div>
            <DataPanel
                title={"Sensor Data"}
                sensors={{
                    heart_rate: {
                        label: "Heart Rate (BPM)",
                        value: heartRate
                    },
                    ecg: {
                        label: "ECG Data",
                        value: ecgData
                    }
                }}
            />
        </div>
    );
};