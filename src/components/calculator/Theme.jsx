import React from "react";
import "./Theme.css";
export default function Theme() {
  return (
    <div className="theme-btn">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
    </div>
  );
}
