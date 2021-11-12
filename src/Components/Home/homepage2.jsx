import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./homepage.css";

const initialState = {
  location: "",
  startD: "",
  endD: "",
  adults: "",
  children: "",
  rooms: "",
};

function Homepage() {
  const [data, setData] = useState(initialState);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, startD: startDate, endD: endDate });
  };

  const addQuery = () => {
    console.log(data);
    navigate("/searchResults", { state: data });
  };

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
          placeholderText="Check-In"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          placeholderText="Check-Out"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
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
        <p>Browse by Property</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cottages</h5>
                  <p>128,204 Cottages</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Hotels</h5>
                  <p>88,292 hotels</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Apartments</h5>
                  <p>762,292 Aptsmnts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Resorts</h5>
                  <p>17,097 Resorts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Villas</h5>
                  <p>371,515 Villas</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cabins</h5>
                  <p>30,784 Cabins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>Get inspiration for your next trip</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>Browse by Property</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cottages</h5>
                  <p>128,204 Cottages</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Hotels</h5>
                  <p>88,292 hotels</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Apartments</h5>
                  <p>762,292 Aptsmnts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Resorts</h5>
                  <p>17,097 Resorts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Villas</h5>
                  <p>371,515 Villas</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card6">
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cabins</h5>
                  <p>30,784 Cabins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>Get inspiration for your next trip</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card5 bg-dark text-white">
                <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/540x405/138823950.webp?k=7012afe7963108b3ddc777cabd568cb5ef562e79bd146a6e4215943a9a2fc003&o="
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">
                    Top five parks for stargazing in the US
                  </h5>
                  <p className="card-text">
                    The USA's darkest parks, promising little to no light
                    pollution and starry night skies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="section4">
        <div className="container contDetails">
          <div className="row headingRow">
            <p className="display-6">Destinations we Love</p>
            <div className="col-2">
              <button>Regions</button>
            </div>
            <div className="col-2">
              <button>Cities</button>
            </div>
            <div className="col-2">
              <button>Places of Interest</button>
            </div>
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
  </section>*/}
    </div>
  );
}

export default Homepage;
