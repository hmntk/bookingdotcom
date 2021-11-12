import React from "react";
import { useLocation } from "react-router-dom";
import "./searchResults.css";
import { useState } from "react";
import SortByStars from "./Filters/sortbyStar";
import SortingByAmount from "./Filters/sortbyPrice";
import PaymentButtons from "./Filters/sortbyType";
import HotelFile from "./HotelFile";
import hotel from "./hotel.json";

function SearchResults() {
  const [hotelDataArray, setHotelDataArray] = useState(hotel);
  const { state } = useLocation();
  console.log("ive props", state);

  // console.log(hotelDataArray.length);
  return (
    <div className="container contentCont">
      <div className="row">
        <h3>You are viewing locations in {state.location}</h3>
      </div>
      {/* <div className="row">
        {state.startD} to {state.endD}
      </div> */}
      <div className="row">
        <div className="col-3 filters">
          <p className="">Sort by amount</p>
          <SortByStars />
          <p className="">Sort by amount</p>
          <SortingByAmount />
          <p className="">Sort by amount</p>
          <PaymentButtons />
        </div>
        <div className="col-9 content">
          {hotelDataArray.map((el) => {
            return <HotelFile hotel={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
