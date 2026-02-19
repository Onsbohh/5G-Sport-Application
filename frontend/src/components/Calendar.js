import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// A datepicker component for selecting dates, dates with data in them should be highlighted.

const dates = [
    new Date(2026, 0, 10),
    new Date(2026, 0, 15)
]

const Calendar = ({selectedDate, onDateChange}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div style={{
            left: 0,
            position: "block"
        }}>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => onDateChange(date)}
                highlightDates={dates}
            />
        </div>
        )
};

export default Calendar