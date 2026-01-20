import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// A datepicker component for selecting dates, dates with data in them should be highlighted.

const dates = [
    new Date(2026, 0, 10),
    new Date(2026, 0, 15)
]

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div style={{
            marginTop: "50px",
            marginRight: "25px"
        }}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                highlightDates={dates}
            />
        </div>
        )
};

export default Calendar