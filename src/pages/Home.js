import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Home.css";

export default function Home() {
  const [controls, setControls] = useState({
    building1: { lights: false, blinds: false, aiControl: false },
    building2: { lights: false, blinds: false, aiControl: false },
    building3: { lights: false, blinds: false, aiControl: false },
  });

  const toggleControl = (building, control) => {
    setControls({
      ...controls,
      [building]: { ...controls[building], [control]: !controls[building][control] },
    });
  };

  const defaultStatus = {
    lights: "On",
    blinds: "On",
    aiControl: "Off",
    currentDraw: 0,
    voltageDraw: 0,
  };

  const data = [
    { time: "00:00", watts: 240 },
    { time: "01:00", watts: 260 },
    { time: "02:00", watts: 230 },
    { time: "03:00", watts: 210 },
    { time: "04:00", watts: 200 },
    { time: "05:00", watts: 220 },
    { time: "06:00", watts: 250 },
    { time: "07:00", watts: 280 },
    { time: "08:00", watts: 300 },
    { time: "09:00", watts: 290 },
    { time: "10:00", watts: 270 },
    { time: "11:00", watts: 310 },
    { time: "12:00", watts: 330 },
  ];

  return (
    <div className="home">
      <h1>Smart Energy Dashboard</h1>
      {["building1", "building2", "building3"].map((building) => (
        <section key={building} className="building-section">
          <h2>{building.replace(/^\w/, (c) => c.toUpperCase())}</h2>
          <div className="control-panel">
            <h3>Control Panel</h3>
            {["lights", "blinds", "aiControl"].map((control) => (
              <div key={control} className="control">
                <label>
                  {control.replace(/^\w/, (c) => c.toUpperCase())}
                  <input
                    type="checkbox"
                    checked={controls[building][control]}
                    onChange={() => toggleControl(building, control)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="status-panel">
            <h3>Status Panel</h3>
            {Object.entries(defaultStatus).map(([param, value]) => (
              <div key={param} className="parameter">
                <span>{param.replace(/^\w/, (c) => c.toUpperCase())}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="power-chart">
            <h3>Power Consumption</h3>
            <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="watts" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            </LineChart>
            </div>
          </section>
        ))}
    </div>
  );
}
