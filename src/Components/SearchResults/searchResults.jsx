import React from "react";
import { useLocation } from "react-router-dom";
import "./searchResults.css";
import { useState, useEffect } from "react";
import SortByStars from "./Filters/sortbyStar";
import SortingByAmount from "./Filters/sortbyPrice";
import PaymentButtons from "./Filters/sortbyType";
import HotelFile from "./HotelFile";
import axios from "axios";
// import hotel from "./hotel.json";

function SearchResults() {
  //axios - data will come
  // store in something
  //new variable fro mapping data and showing on right side
  //filters
  // window.refresh()
  const [hotelDataArray, setHotelDataArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      axios.get("http://localhost:1234/hotel").then(({ data }) => {
        // setList([...data.items]);
        console.log("axios fetch req data is", data);
        setHotelDataArray([...data]);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const { state } = useLocation();
  console.log("ive props", state);

  return isLoading ? (
    <div>Please wait</div>
  ) : (
    // console.log(hotelDataArray.length);
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
