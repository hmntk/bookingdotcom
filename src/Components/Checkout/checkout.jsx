import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div style={{ margin: "25px 0" }}>
      <h1 className="text-center">--WIP--</h1>
      <h1 className="display-1">
        Mean time click{" "}
        <button
          onClick={() => {
            navigate("/confirmation");
          }}
          className="btn btn-success btn-lg"
        >
          HERE
        </button>{" "}
        to go ahead wth the booking and pay rs{" "}
        <button className="btn btn-info btn-lg">{state}</button>
      </h1>
    </div>
  );
}

export default Checkout;
