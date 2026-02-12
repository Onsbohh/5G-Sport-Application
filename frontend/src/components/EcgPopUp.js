import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

// A popup window where the selected players Ecg graph should be shown.
const EcgPopup = ({player}) => {
    const style = {
        border: "2px solid #000",
        backgroundColor: "white",
        marginLeft: "15px",
        marginTop: "5px",
        marginBottom: "15px"
    }
    if(!player.ecg){
        return (
            <div style={style}>
                <p>Error fetching player data</p>
            </div>
        )
    }

    const ecgGraphData =
        player.ecg.map((sample, index) => ({
            Samples: index,
                ecg: sample,
        }));



    /*
    if (ecg.data) {
        ecgData = ecg.data;
        for (let i = 0; i < ecgData.length; i++) {
            if (ecgData[i].Timestamp_UTC == timeStamp) {
                ecgGraphData = ecgData[i].Samples.map((sample, index) => ({
                    Samples: index,
                    ecg: sample,
                }));
            }
        }

        //console.log("ECG Graph Data", ecgGraphData);

    }
     */

    return (
        <div className="ecg-graph-popup" style={style}>
            <LineChart width={170} height={200} data={ecgGraphData}>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="Samples"/>
                <YAxis/>
                <Line type="linear" dataKey="ecg" stroke="#8884d8" dot={false} strokeWidth={2}/>
            </LineChart>
        </div>
    )
}
export default EcgPopup