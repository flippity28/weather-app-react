import React from "react";
import SearchLocation from "./searchlocation.js";
import sky from "./images/sky.jpg";
import "./header.css"

export default function Header() {
  return (<div className="header card text-white header-card">
      <img src={sky} className="card-img header-img" alt="sky" />
      <div className="card-img-overlay">
        <h1 className="card-title">Weather Forecast</h1>
        <SearchLocation />
      </div>
      
    </div>
  );
}
