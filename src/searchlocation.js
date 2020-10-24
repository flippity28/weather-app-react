import React from "react";

export default function SearchLocation() {
  return (
    <div className="search-location row">
      <div className="col-3"> </div>
      <form className=" form-group location-search-form col-sm-6">
        <input
          type="text"
          id="location-search"
          placeholder="Type a location"
          autoFocus="on"
          autoComplete="off"
        />
        <input type="submit" id="search-button" value="Search" />
        <button className="my-location text-left" id="current-location">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}
