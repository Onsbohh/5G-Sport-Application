import React from "react";
import ReactPlayer from "react-player"

export default function VideoPlayer () {
    return (
        <div>
            <ReactPlayer
                src="/videos/2025-12-02_17-36-01-586387.mp4"
                controls={true}
                width="600px"
                height="450px"
                config={{
                    file: {
                        attributes: {preload: "auto"}
                    }
                }}
                />
        </div>
    );
};