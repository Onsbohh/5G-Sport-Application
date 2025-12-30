import React, {useRef, useState} from "react";
import ReactPlayer from "react-player"
import '../styles/VideoPlayer.css';

export default function VideoPlayer () {
    const [videoURL, setVideoURL] = useState(null);
    const [videoName, setVideoName] = useState(null);
    let videoRef = useRef(null);
    let videoTimeStamp = useRef(null);

    const chooseVideo = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const name = file.name;
        setVideoName(name.replace(/\.[^/.]+$/, "")); // Remove file extension

        const url = URL.createObjectURL(file);
        setVideoURL(url);
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
                        videoTimeStamp = videoName + Math.round(e.target.currentTime);
                        console.log("Video timestamp: ", videoTimeStamp);
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
        </div>
    );
};