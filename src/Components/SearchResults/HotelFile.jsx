import React from "react";
import "./HotelFile.css";
import { useNavigate } from "react-router";

export default function HotelFile({ hotel }) {
  const navigate = useNavigate();
  //   const el = props;
  //   console.log(props);
  //   const { price } = hotel;
  // console.log("data is", hotel.img_url);
  return (
    <div className="container hotelCont">
      <div className="row">
        <div className="col-4 hotelImg">
          <img src={hotel.img_url} alt="" />
        </div>
        <div className="col-5 hotelMid">
          <p className="hotelTitle fs-4">
            {hotel.name}
            <span>
              <button className="btn btn-secondary btn-sm">
                {hotel.category}
              </button>
            </span>
          </p>
          <div className="row">
            <p className="hotelAdd">{hotel.location_string}</p>
          </div>

          <div className="row class">
            <div className="col-3">
              <p>₹₹₹</p>
            </div>
          </div>
          <p className="btn btn-success">{hotel.category_ext}</p>
        </div>
        <div className="col-3 hotelRight">
          <div className="row reviewRow">
            <div className="col-5">
              <div className="row">
                <p className="fs-6">{hotel.comment}</p>
              </div>
              <div className="row">
                <p className="fsun">9 reviews</p>
              </div>
            </div>
            <div className="col-2">
              <button className="rating">{hotel.rating}</button>
            </div>
          </div>
          <div className="row"></div>
          <div className="row">
            <p>5 nights, 2 adults</p>
          </div>
          <div className="row">
            <p className="pricing fs-4">₹ {hotel.price}</p>
            <p className="tandc">+ taxes and charges</p>
          </div>
          <div className="row">
            <button
              onClick={() => {
                navigate("./hotel", { state: hotel });
              }}
              className="btn btn-primary"
            >
              See Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
