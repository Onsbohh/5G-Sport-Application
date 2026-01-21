import React, { useState } from "react";
import stylesheet from '../styles/DataPanel.css';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

export default function DataPanel({ title, sensorData }) {
    let ecgData = [];
    console.log("Sensors in DataPanel: ", sensorData);
    if (sensorData.heart_rate.value) {
        console.log(sensorData.heart_rate.value.Average_BPM);
    }

    if (sensorData.ecg.value) {
        ecgData = sensorData.ecg.value.Samples.map((sample, index) => ({
            Samples: index,
            ecg: sample,
        }));
    }

    return (
        <div className="DataPanel-container">
            <h3>{title}</h3>
            {sensorData.heart_rate.value ? (
                <div>
                    <p><strong>Heart Rate:</strong> {Math.round(sensorData.heart_rate.value.Average_BPM)} BPM</p>
                </div>
            ) : (
                <p>No heart rate data available.</p>
            )}
            {sensorData.ecg.value ? (
                <div>
                    <LineChart width={400} height={200} data={ecgData}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="Samples" />
                        <YAxis />
                        <Line type="monotone" dataKey="ecg" stroke="#8884d8" dot={false} strokeWidth={2}/>
                    </LineChart>
                </div>
            ) : (
                <p>No ECG data available.</p>
            )}
        </div>
    );
}
