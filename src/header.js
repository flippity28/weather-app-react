import React from "react";
import SearchLocation from "./searchlocation.js";
import umbrellas from "./images/umbrellas.jpg";
import "./header.css"

export default function Header() {
  return (<div className="header card text-white header-card">
      <img src={umbrellas} className="card-img header-img" alt="umbrellas" />
      <div className="card-img-overlay">
        <h1 className="card-title">Weather Forecast</h1>
        <SearchLocation />
      </div>
      
    </div>
  );
}
