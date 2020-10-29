import React, {useState} from "react";

export default function UnitConversion() {
  const [unit, setUnit]= useState("")
  function convertT(event){event.preventDefault;
  setUnit("F")}
  
  return (
    <div className="unit-conversion">
      <div
        className="btn-group row col-4 offset-4"
        role="group"
             >
        <button type="button" className="btn celsius">
          Celsius
        </button>
        <button type="button" className="btn fahrenheit" onClick={convertF}>
          Fahrenheit
        </button>
      </div>
    </div>
  );
}
