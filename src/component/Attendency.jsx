
import React, { useState } from "react";
import "./Attendency.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const AttendanceTracker = () => {
  const [attendance, setAttendance] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: null }), {})
  );
  const [summary, setSummary] = useState({ present: 0, absent: 0, percentage: 0 });

  const handleAttendance = (day, status) => {
    setAttendance((prev) => ({ ...prev, [day]: status }));
  };

  const calculateSummary = () => {
    const presentCount = Object.values(attendance).filter((v) => v === "P").length;
    const absentCount = Object.values(attendance).filter((v) => v === "A").length;
    const total = presentCount + absentCount;

    const percentage = total > 0 ? ((presentCount / total) * 100).toFixed(2) : 0;

    setSummary({ present: presentCount, absent: absentCount, percentage });
  };

  return (
    <div className="attendance-container">
      <h2>WEEKLY ATTENDANCE</h2>

      <div className="attendance-table">
        {days.map((day) => (
          <div key={day} className="attendance-row">
            <span className="day-label">{day}</span>
            <div className="buttons">
              <button
                className={`btn present ${attendance[day] === "P" ? "active" : ""}`}
                onClick={() => handleAttendance(day, "P")}
              >
                P
              </button>
              <button
                className={`btn absent ${attendance[day] === "A" ? "active" : ""}`}
                onClick={() => handleAttendance(day, "A")}
              >
                A
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <p>
          Total Present: <strong>{summary.present}</strong>
        </p>
        <p>
          Total Absent: <strong>{summary.absent}</strong>
        </p>
        <p>
          Percentage: <strong>{summary.percentage}%</strong>
        </p>
      </div>

      <button className="btn-calc" onClick={calculateSummary}>
        CALCULATE
      </button>
    </div>
  );
};

export default AttendanceTracker;
