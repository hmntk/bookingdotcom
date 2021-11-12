import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./hotel.css";

function Hotel() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("props", state);
  return (
    <div>
      <section className="images">
        <div className="card bg-dark text-white">
          <img
            src={state.img_url}
            className="card-img"
            style={{ objectFit: "fill" }}
            alt="..."
          />
          <div className="card-img-overlay">
            <h1
              style={{
                color: "white",
                background: "black",
                padding: "10px 5px",
              }}
              className="card-title"
            >
              {state.name}
            </h1>
            <p
              className="card-text"
              style={{ background: "black", padding: "10px 5px" }}
            >
              {state.ranking}
            </p>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <div className="row">
            <div className="col-3 facilities">
              <h3
                style={{
                  background: "blue",
                  color: "white",
                  padding: "10px",
                }}
              >
                Facilities
              </h3>
              {state.facilities.map((el) => {
                return (
                  <p style={{ background: "lightpink", padding: "10px" }}>
                    {el}
                  </p>
                );
              })}
            </div>
            <div className="col-6">
              <h3
                style={{
                  background: "green",
                  color: "white",
                  padding: "10px",
                  margin: "20px 0",
                }}
              >
                Reviews
              </h3>
              {state.reviews.map((el) => {
                return (
                  <div>
                    <p style={{ background: "lightgreen", padding: "10px" }}>
                      {el.name} :
                    </p>

                    <p style={{ background: "lightblue", padding: "10px" }}>
                      {el.review}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="col-3 finalOne">
              <button
                onClick={() => {
                  navigate("/checkout", { state: state.price });
                }}
                className="btn btn-primary btn-lg"
              >
                Reserve
              </button>
              <p>
                for rupees <h3>{state.price} /-</h3>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hotel;
