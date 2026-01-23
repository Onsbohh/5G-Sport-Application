import React, {useRef, useState} from "react";
import ReactPlayer from "react-player"
import '../styles/VideoPlayer.css';
import {getHeartRateByTimestamp, getEcgByTimestamp} from "../service/sensorDataService"
import DataPanel from "./DataPanel";

export default function VideoPlayer () {
    const [videoURL, setVideoURL] = useState(null);
    const [videoName, setVideoName] = useState(null);
    let videoRef = useRef(null);
    const [videoTimeStamp, setVideoTimeStamp] = useState(null);
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

    const fetchHeartRate = async (start, end) => {
        try {
            const dataEcg = await getEcgByTimestamp(start, end);
            const dataHr = await getHeartRateByTimestamp(start, end);
            console.log("Ecg Data: ", dataEcg);

            // Changed in the future
            setEcgData(dataEcg);
            setHeartRate(dataHr);

            console.log("Heart Rate Data: ", dataHr);
        } catch (error) {
            console.error("Error fetching heart rate data: ", error);
        }
    }



    return (
        <div style={{width: "100%", maxWidth: "1500px", display: "flex", margin: "auto"}}>
            <div className="video-container">
                <ReactPlayer
                    src={videoURL}
                    controls={true}
                    style={{width: "100%", height: "100%", borderRadius: "8px", border: "none"}}
                    //Gives videos time when it changes
                    onTimeUpdate={(e) => {
                        console.log(videoName);
                        const ts = (Number(videoName) + Math.round(e.target.currentTime));
                        setVideoTimeStamp(ts);
                        console.log("Video timestamp: ", videoTimeStamp);
                    }}
                    onPlaying={(e) => {
                        console.log("playing: ", e.target.duration);
                        fetchHeartRate(videoName, (Number(videoName) + Math.round(e.target.duration)));
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
                hr={{data: heartRate}}
                ecg={{data: ecgData}}
                timeStamp={videoTimeStamp}
            />
        </div>
    );
};