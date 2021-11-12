import React from "react";
import "./header.css";
import { useNavigate } from "react-router";
import { FaBeer } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="container main">
      <div className="row contRow">
        <div className="col">
          <h2>
            Booking<span className="dot">.com</span>
          </h2>
        </div>
        <div className="col navRight">
          <h5>INR</h5>
          <button className="list">List your Property</button>
          <button
            className="ath"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
          <button
            className="ath"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="navElt">
        <button>
          <FaBeer />
          Stays
        </button>
        <button>
          <FaBeer />
          Flights
        </button>
        <button>
          <FaBeer />
          Flight + Hotel
        </button>
        <button>
          <FaBeer />
          Car Rentals
        </button>
        <button>
          <FaBeer />
          Attractions
        </button>
        <button>
          <FaBeer />
          Airport Taxis
        </button>
      </div>
    </div>
  );
}

export default Header;
