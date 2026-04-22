import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!name || !score) return;

    const newStudent = {
      name,
      score: Number(score),
      status: score >= 50 ? "Pass" : "Fail",
    };

    setStudents([...students, newStudent]);
    setName("");
    setScore("");
  };

  const total = students.length;
  const passed = students.filter((s) => s.score >= 50).length;
  const avg =
    total === 0
      ? 0
      : (students.reduce((sum, s) => sum + s.score, 0) / total).toFixed(0);

  return (
    <div className="main">
      <h1 className="title">
        STUDENT <span>SCOREBOARD</span>
      </h1>

      {/* REGISTER */}
      <div className="card">
        <div className="card-header">
          <p>● Register Student</p>
          <span>NEW ENTRY</span>
        </div>

        <div className="input-row">
          <input
            type="text"
            placeholder="STUDENT NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="SCORE (0-100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />

          <button onClick={addStudent}>+ ADD</button>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div>
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>
        <div>
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>
        <div>
          <p>AVG SCORE</p>
          <h2>{avg}</h2>
        </div>
      </div>

      {/* RECORDS */}
      <div className="card">
        <div className="card-header">
          <p>STUDENT RECORDS</p>
          <span>{total} Entries</span>
        </div>

        <div className="table">
          <div className="table-head">
            <span>Name</span>
            <span>Score</span>
            <span>Status</span>
            <span>Update</span>
          </div>

          {/* Dynamic */}
          {students.map((s, i) => (
            <div className="table-row" key={i}>
              <span>{s.name}</span>
              <span>{s.score}</span>
              <span className={s.status === "Pass" ? "pass" : "fail"}>
                ● {s.status}
              </span>
              <span>
                <input type="number" placeholder="Update" />
                <button>Save</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;