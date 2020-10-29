import React from "react";

export default function MoreInfo(props) {
  let link = "https://openweathermap.org/find?q="+props.data.cityName
  return (
     <div className="more-info">
      <a
        id="more-info-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer" 
      >
        Click for more information
      </a>
    </div>
  );
}
