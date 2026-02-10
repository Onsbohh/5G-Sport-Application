import {React, useState} from "react";
import { useLocation } from 'react-router'

const InfoPage = () => {
    let location = useLocation();
    const { state } = location;
    return (
        <div>
            <h1>Information for Users</h1>
            <a>
                Instructions to stream:

                Download:

                MediaMTX https://github.com/bluenviron/mediamtx/releases
                FFmpeg https://www.gyan.dev/ffmpeg/builds/
                At the bottom download ffmpeg-release-essentials.7z
                Edit backend/server/streamServer.js:

                Line 14 change to use ffmpeg.exe location.
                Line 16 "video=" change to use your webcam name. Can be found in windows settings.
                Edit Mediamtx.yml:

                Inside of Mediamtx folder is mediamtx.yml
                Find recordPath:
                Change path to ./recordings/%path/%s
                Now file name format is unix timestamp in seconds.
                Find at the bottom paths:
                Change to camstream: record: yes
                Start:

                Run mediamtx.exe
                This should open a console.
                Run streamServer.js (node streamServer.js)
                Run React Application (nmp start)
            </a>
        </div>
    )
}
export default InfoPage