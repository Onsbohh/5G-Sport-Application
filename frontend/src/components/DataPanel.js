import React, { useState } from "react";
import stylesheet from '../styles/DataPanel.css';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

export default function DataPanel({ title, ecg, hr}) {
    let ecgData = []; let ecgGraphData = [];
    let hrData = [];
    let minHr; let maxHr; let nowHr; let intervalHr;

    if (ecg) {
        ecgGraphData = ecg.Samples.map((sample, index) => ({
            index: index,
            ecg: sample,
        }));

        console.log("ECG Graph Data", ecgGraphData);
    }

    if (hr) {
        console.log("Heart Rate Data: ", hr);
        nowHr = hr.Average_BPM;
        intervalHr = hr.rrData;
    }


    return (
        <div className="DataPanel-container">
            <h3>{title}</h3>
            {hr ? (
                <div>
                    <p>HR now: {nowHr}</p>
                    <p>R-R interval: {intervalHr}</p>
                </div>
            ) : (
                <p>No heart rate data available.</p>
            )}
            {ecg ? (
                <div>
                    <LineChart width={550} height={200} data={ecgGraphData}>
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="index"/>
                        <YAxis/>
                        <Line type="linear" dataKey="ecg" stroke="#8884d8" dot={false} strokeWidth={2}/>
                    </LineChart>
                </div>
            ) : (
                <p>No ECG data available.</p>
            )}
        </div>
    );
}
