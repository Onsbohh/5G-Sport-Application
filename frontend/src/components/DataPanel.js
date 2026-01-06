import React, { useState } from "react";
import stylesheet from '../styles/DataPanel.css';

export default function DataPanel({ title, sensors }) {
    const keys = Object.keys(sensors);
    const [activeTab, setActiveTab] = useState(keys[0]);
    const current = sensors[activeTab];

    /**
     * Safe renderer for ANY data:
     * - primitives
     * - arrays
     * - objects
     * - nested objects
     */
    const renderValue = (value) => {
        if (value === null || value === undefined) {
            return <span>No data</span>;
        }

        // ARRAY (e.g., ECG.samples)
        if (Array.isArray(value)) {
            return (
                <div className="ml-2">
                    [
                    <div className="ml-4">
                        {value.slice(0, 50).map((item, index) => (
                            <div key={index}>{renderValue(item)}</div>
                        ))}
                        {value.length > 50 && (
                            <div>… ({value.length} samples)</div>
                        )}
                    </div>
                    ]
                </div>
            );
        }

        // OBJECT (e.g., heart_rate object)
        if (typeof value === "object") {
            return (
                <div className="ml-2">
                    {Object.entries(value).map(([k, v]) => (
                        <div key={k} className="mb-1">
                            <strong>{k}: </strong>
                            <span>{renderValue(v)}</span>
                        </div>
                    ))}
                </div>
            );
        }

        // PRIMITIVE (number, string, boolean)
        return <span>{String(value)}</span>;
    };

    return (
        <div className="DataPanel-container">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>

            {/* TABS */}
            <div className="flex border-b">
                {keys.map((key) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-4 py-2 text-sm ${
                            activeTab === key
                                ? "border-b-2 border-blue-600 font-semibold"
                                : "text-gray-500"
                        }`}
                    >
                        {sensors[key].label}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT */}
            <div className="mt-4">
                <h3 className="font-medium mb-2">{current.label}</h3>

                <div className="text-sm bg-gray-100 p-3 rounded whitespace-pre-wrap">
                    {renderValue(current.value)}
                </div>
            </div>
        </div>
    );
}
