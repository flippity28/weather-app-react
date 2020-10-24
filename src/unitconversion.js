import React from "react";

export default function UnitConversion() {
  return (
    <div className="unit-conversion">
      <div
        className="btn-group row col-4 offset-4"
        role="group"
             >
        <button type="button" className="btn celsius">
          Celsius
        </button>
        <button type="button" className="btn fahrenheit">
          Fahrenheit
        </button>
      </div>
    </div>
  );
}