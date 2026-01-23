import React, { useState } from "react";
import stylesheet from '../styles/DataPanel.css';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

export default function DataPanel({ title, ecg, hr, timeStamp}) {
    let ecgData = []; let ecgGraphData = [];
    let hrData = [];
    let minHr; let maxHr; let nowHr; let intervalHr;

    if (ecg.data && hr.data) {
        ecgData = ecg.data;
        hrData = hr.data;

        minHr= Math.min(...hrData.map(d => d.Average_BPM));
        maxHr = Math.max(...hrData.map(d => d.Average_BPM));

        for (let i = 0; i < hrData.length; i++) {
            if (hrData[i].Timestamp_UTC === timeStamp) {
                nowHr = hrData[i].Average_BPM
                intervalHr = hrData[i].rrData[0];
            }
        }

        for (let i = 0; i < ecgData.length; i++) {
            if (ecgData[i].Timestamp_UTC === timeStamp) {
                ecgGraphData = ecgData[i].Samples.map((sample, index) => ({
                    Samples: index,
                    ecg: sample,
                }));
            }
        }
    }


    return (
        <div className="DataPanel-container">
            <h3>{title}</h3>
            {hr.data ? (
                <div>
                    <p>Lowest HR: {minHr}</p>
                    <p>HR now: {nowHr}</p>
                    <p>Highest HR: {maxHr}</p>
                    <p>R-R interval: {intervalHr}</p>
                </div>
            ) : (
                <p>No heart rate data available.</p>
            )}
            {ecg.data ? (
                <div>
                    <LineChart width={400} height={200} data={ecgGraphData}>
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="Samples"/>
                        <YAxis/>
                        <Line type="monotone" dataKey="ecg" stroke="#8884d8" dot={false} strokeWidth={2}/>
                    </LineChart>
                </div>
            ) : (
                <p>No ECG data available.</p>
            )}
        </div>
    );
}
