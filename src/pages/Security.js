import React from "react";
import "./Security.css";

export default function Security() {
  return (
    <div className="security">
      <h1>Security</h1>
      <div className="section">
        <h2>Device Management</h2>
        <div className="device-management">
          <div className="control">
            <label>Authorized User:</label>
            <input type="text" />
          </div>
          <div className="control">
            <label>Access Code:</label>
            <input type="password" />
          </div>
          <div className="control">
            <button className="button">Authorize</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Manage Buildings</h2>
        <div className="manage-buildings">
          <div className="control">
            <label>Select Building:</label>
            <select>
              <option>Building 1</option>
              <option>Building 2</option>
              <option>Building 3</option>
            </select>
          </div>
          <div className="control">
            <button className="button">Add Building</button>
            <button className="button">Remove Building</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Access Management and Other Security Features</h2>
        <div className="control-panel">
          <div className="control">
            <label>Enable Two-Factor Authentication:</label>
            <input type="checkbox" />
          </div>
          <div className="control">
            <label>Enable Email Notifications:</label>
            <input type="checkbox" />
          </div>
          <div className="control">
            <label>Enable Access Logging:</label>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
