import {React, useState} from "react";
import { useLocation } from 'react-router'

const InfoPage = () => {
    let location = useLocation();
    const { state } = location;
    return (
        <div className="Infopage-content">
            <h1>Information for Users</h1>
                <h1>Instructions to stream:</h1>

                <h2>Download:</h2>

            <p>
                <a href="https://github.com/bluenviron/mediamtx/releases" target="_blank">MediaMTX</a>
                <br/>
                <a href="https://www.gyan.dev/ffmpeg/builds/" target="_blank">FFmpeg</a>
                <br/>
                1. At the bottom download ffmpeg-release-essentials.7z
                <br/>
                => Edit backend/server/streamServer.js:
                <br/>
                => Line 14 change to use ffmpeg.exe location.
                <br/>
                => Line 16 "video=" change to use your webcam name. Can be found in windows settings.
                <br/>
                2. Edit Mediamtx.yml:
                <br/>
                Inside of Mediamtx folder is mediamtx.yml:
                <br/>
                    =>Find recordPath:
                <br/>
                        =>Change path to ./recordings/%path/%s
                <br/>
                Now file name format is unix timestamp in seconds.
                <br/>
                Find at the bottom paths:
                <br/>
                Change to camstream: record: yes
                <br/>
                Start:
                <br/>
                Run mediamtx.exe
                <br/>
                    => This should open a console.
                <br/>
                        => Run streamServer.js (node streamServer.js)
                <br/>
                        => Run React Application (nmp start)
            </p>
        </div>
    )
}
export default InfoPage