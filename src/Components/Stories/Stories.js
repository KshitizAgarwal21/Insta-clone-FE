import React from "react";
import "./stories.css";
export default function Stories() {
  return (
    <div>
      <div className="heading">
        <div>
          <h2>Stories</h2>
        </div>
        <div style={{ marginRight: "50px", marginTop: "10px" }}>
          <p>Watch All</p>
        </div>
      </div>
      <div className="stories">
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
        <div class="display-picture story"></div>
      </div>
    </div>
  );
}
