import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./homepage.css";
// import { setDate } from "date-fns";

const initialState = {
  location: "",
  startD: "",
  endD: "",
  adults: "",
  children: "",
  rooms: "",
};

function Homepage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [data, setData] = useState(initialState);

  // let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleChange2 = (e) => {
    console.log("came in");
    console.log(dateRange);
    // const { name, value } = e.target;
    // setData({ ...data, [name]: value });
  };

  const addQuery = () => {
    setData({ ...data, endDate: dateRange[1], startDate: dateRange[0] });
    console.log(data);
    // navigate("/searchResults", { state: data });
  };
  // function routeIt() {
  //   setData(data);
  //   console.log("data before is", data);
  //   navigate("/searchResults", { state: data });
  // }

  return (
    <div>
      <section className="container">
        <div className="row">
          <h1 className="display-6">
            Find deals on hotels, homes and much more...
          </h1>
          <p className="h-6">
            Find exclusive Genius rewards in every corner of the world!
          </p>
        </div>
      </section>
      <div className="formRow">
        <input
          name="location"
          value={data.location}
          type="text"
          onChange={handleChange}
          placeholder="Enter Location"
        />
        <DatePicker
          placeholderText="Checkin - Checkout"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          // onSelect={}
          onChange={(update) => {
            setDateRange(update);
            handleChange2();
          }}
        />
        <div className="selectMenu">
          <select
            name="adults"
            onChange={handleChange}
            className="form-select shadow-none"
            aria-label="Default select example"
          >
            <option defaultValue>Adults</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            name="children"
            onChange={handleChange}
            className="form-select shadow-none"
            aria-label="Default select example"
          >
            <option defaultValue>Children</option>
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          <select
            name="rooms"
            onChange={handleChange}
            className="form-select shadow-none"
            aria-label="Default select example"
          >
            <option defaultValue>Rooms</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button onClick={addQuery} className="formBtn">
          Search
        </button>
      </div>
      <section>
        <p>Get inspiration for your next trip</p>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      <section>
        <p>Browse by Property</p>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                Ras Al Khaimaih <span>113 properties</span>
              </div>
              <div className="row">
                Bora Bora <span>59 properties</span>
              </div>
              <div className="row">
                Jersey <span>89 properties</span>
              </div>
              <div className="row">
                Uttar Pradesh <span>4,376 properties</span>
              </div>
            </div>
            <div className="col">
              <div className="row">
                Ras Al Khaimaih <span>113 properties</span>
              </div>
              <div className="row">
                Bora Bora <span>59 properties</span>
              </div>
              <div className="row">
                Jersey <span>89 properties</span>
              </div>
              <div className="row">
                Uttar Pradesh <span>4,376 properties</span>
              </div>
            </div>
            <div className="col">
              <div className="row">
                Ras Al Khaimaih <span>113 properties</span>
              </div>
              <div className="row">
                Bora Bora <span>59 properties</span>
              </div>
              <div className="row">
                Jersey <span>89 properties</span>
              </div>
              <div className="row">
                Uttar Pradesh <span>4,376 properties</span>
              </div>
            </div>
            <div className="col">
              <div className="row">
                Ras Al Khaimaih <span>113 properties</span>
              </div>
              <div className="row">
                Bora Bora <span>59 properties</span>
              </div>
              <div className="row">
                Jersey <span>89 properties</span>
              </div>
              <div className="row">
                Uttar Pradesh <span>4,376 properties</span>
              </div>
            </div>
            <div className="col">
              <div className="row">
                Ras Al Khaimaih <span>113 properties</span>
              </div>
              <div className="row">
                Bora Bora <span>59 properties</span>
              </div>
              <div className="row">
                Jersey <span>89 properties</span>
              </div>
              <div className="row">
                Uttar Pradesh <span>4,376 properties</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
