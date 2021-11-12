import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <section className="container subscribe">
        <h1 className="text-center display-5">Save time, save money!</h1>
        <h3 className="text-center display-6">
          Sign up and we'll send the best deals to you
        </h3>
        <form>
          <input className="col" type="text" placeholder="Your Email" />
          <button className="col subBtn">Subscribe</button>
        </form>
      </section>
      <section className="container listing">
        <button>List your property</button>
        <hr />
        <div className="row">
          <h6 className="col">Mobile Version</h6>
          <h6 className="col">Manage bookings</h6>
          <h6 className="col">Become an Affiliate</h6>
          <h6 className="col">Booking.com for Business</h6>
          <h6 className="col">Contact Customer Service</h6>
        </div>
      </section>
      <section className="container misc">
        <div>
          <div className="row">
            <div className="col">
              <p>Countries</p> <p>Regions</p>
              <p>Cities</p> <p>Districts</p> <p>Airports</p>
              <p>Hotels</p>
              <p>Places of interest</p>
            </div>
            <div className="col">
              <p>Countries</p> <p>Regions</p>
              <p>Cities</p> <p>Districts</p> <p>Airports</p>
              <p>Hotels</p>
              <p>Places of interest</p>
            </div>
            <div className="col">
              <p>Countries</p> <p>Regions</p>
              <p>Cities</p> <p>Districts</p> <p>Airports</p>
              <p>Hotels</p>
              <p>Places of interest</p>
            </div>
            <div className="col">
              <p>Countries</p> <p>Regions</p>
              <p>Cities</p> <p>Districts</p> <p>Airports</p>
              <p>Hotels</p>
              <p>Places of interest</p>
            </div>
          </div>
          <div>Extranet Login</div>
          <div>Copyright © 1996–2021 Booking.com™. All rights reserved.</div>
          <div>
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
