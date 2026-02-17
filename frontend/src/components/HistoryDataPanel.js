import React, {useEffect, useState} from "react";
import {getEcgByTimestamp, getHeartRateByTimestamp} from "../service/sensorDataService";
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";


export default function HistoryDataPanel ({date}) {
    const [dayStart, setDayStart] = useState(null);
    const [dayEnd, setDayEnd] = useState(null);
    const [ecgData, setEcgData] = useState([]);
    const [ecgGraphData, setEcgGraphData] = useState([]);
    const [secondsOfDay, setSecondsOfDay] = useState(0);
    const [dataStartTime, setDataStartTime] = useState(null);
    const [dataEndTime, setDataEndTime] = useState(null);

    useEffect(() => {
        if (!date) return;
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        console.log(d);
        const ts = Math.floor(d.getTime() / 1000);
        setDayStart(ts)
        console.log("Selected date from Calendar:", d, "=>", ts);
    }, [date]);

    const fetchDataForDay = async () => {
        if (!dayStart) return;
        const endTs = dayStart + 86400; // Add 24 hours in seconds
        setDayEnd(endTs);
        console.log("Fetching data from ", dayStart, " to ", endTs);
        try {
            const dataEcg = await getEcgByTimestamp(dayStart, endTs);
            console.log("Ecg Data: ", dataEcg);
            if (dataEcg.length === 0) {
                console.log("No ECG data available for this date.");
                return;
            }
            setDataStartTime(dataEcg[0].Timestamp_UTC);
            setDataEndTime(dataEcg[dataEcg.length - 1].Timestamp_UTC);
            setEcgData(dataEcg);
        } catch (error) {
            console.error("Error fetching heart rate data: ", error);
        }
    }

    const makeEcgGraphData = () => {
        console.log("Time range of fetched data: ", dataStartTime, " to ", dataEndTime);
        let timeStamp = dayStart + secondsOfDay;
        console.log(timeStamp);
        for (let i = 0; i < ecgData.length; i++) {
            setEcgGraphData(ecgData[i].Samples.map((sample, index) => ({
                Samples: index,
                ecg: sample,
            })));
        }
    }

    useEffect(() => {
        fetchDataForDay();
    }, [dayStart]);

    useInterval(() => {
        if (ecgData.length > 0) {
            makeEcgGraphData();
        }
    }, 1000);

    return (

        <div style={{marginLeft: "20px"}}>
            <h3>History Data Panel</h3>
            {dayStart && dayEnd ? (
                <div>
                    <input
                        type="range"
                        min={0}
                        max={86400}
                        step={1}
                        value={secondsOfDay}
                        onChange={(e) => setSecondsOfDay(Number(e.target.value))}
                    />
                </div>
            ) : (
                <p>Please select a date to fetch data.</p>
            )}
            {ecgData ? (
                <div>
                    <div>
                        <LineChart width={550} height={200} data={ecgGraphData}>
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis dataKey="Samples"/>
                            <YAxis/>
                            <Line type="linear" dataKey="ecg" stroke="#8884d8" dot={false} strokeWidth={2}/>
                        </LineChart>
                    </div>
                </div>
            ) : (
                <p>No ECG data available for the selected date.</p>
            )}
            {/* Display fetched data here */}
        </div>
    );
}