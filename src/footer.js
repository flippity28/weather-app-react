import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/flippity28/weather-app-react"
        className="code-source"
        target="_blank"
        rel="noopener noreferrer" 
      >
        Open-source code <i className="fab fa-github"></i> {" "}
      </a>
      by{" "}
      <a
        href="https://www.linkedin.com/in/felicity-child-13b00182/"
        className="linkedin"
        target="_blank"
               rel="noopener noreferrer" 
      >
        Flip
      </a>
    </div>
  );
}
