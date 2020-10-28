import React from "react";

export default function TodayCurrent(props) {
    return (
    <div className="today-current col-sm-6 card">
        <div className="card-current ">
             <h5>city</h5>
            <h6>date</h6>
            <div  className="card-text">
              <div className="row">
              <div className=" col-6"> <i className="fas fa-info today-icon"></i></div>
               <div className="current-temp col-6">°C</div>
               </div>
                  <div className="today-description row col-12"> description</div>
                  <div className="today-feels row col-12">Feels like °C
                  </div> 
                  
            </div>
            
        </div>
        </div>)
      
       
           
   }
