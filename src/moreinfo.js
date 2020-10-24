import React from "react";

export default function MoreInfo() {
  return (
    <div className="more-info">
      <a
        id="more-info-link"
        href="https://openweathermap.org/find?q=london"
        target="_blank"
        rel="noopener noreferrer" 
      >
        Click for more information
      </a>
    </div>
  );
}
