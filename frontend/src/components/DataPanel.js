import React, { useState } from "react";
import stylesheet from '../styles/DataPanel.css';

export default function DataPanel({ title, sensorData }) {

    console.log("Sensors in DataPanel: ", sensorData);
    if (sensorData.heart_rate.value) {
        console.log(sensorData.heart_rate.value.Average_BPM);
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
                    <p><strong>ECG Data:</strong> {JSON.stringify(sensorData.ecg.value.Samples)}</p>
                </div>
            ) : (
                <p>No ECG data available.</p>
            )}
        </div>
    );
}
