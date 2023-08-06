import React from "react";

import "./home-style.css";

function index() {
  return (
    <div className="background-home">
      <div className="weather-container">
        <div className="current">
          <div className="city">New York</div>
          <div className="day">Now</div>
          <div className="row">
            <div className="icon">
              <img src="a.png" width="128" alt="" />
            </div>
            <div className="info">
              <div className="temperature">
                <div className="temperature-now">20°</div>
                <div className="temperature-low">/17°</div>
              </div>
              <div className="status">Partially cloudy</div>
            </div>
          </div>
          <div className="more">
            <div className="item-clima">
              <div className="icon">
                <span className="material-icons"> water_drop </span>
              </div>
              <div className="text">
                <div className="value">9 Km/h</div>
                <div className="type">Wind</div>
              </div>
            </div>
            {/* item */}

            <div className="item-clima">
              <div className="icon">
                <span className="material-icons"> air </span>
              </div>
              <div className="text">
                <div className="value">93%</div>
                <div className="type">chances of rain</div>
              </div>
            </div>
            {/* item */}

            <div className="item-clima">
              <div className="icon">
                <span className="material-icons"> water </span>
              </div>
              <div className="text">
                <div className="value">31%</div>
                <div className="type">Humidity</div>
              </div>
            </div>
            {/* item */}
          </div>
        </div>
        {/* <!--current--> */}

        <div className="list">
          <div className="week-days">
            <div className="day">Mon</div>
            <div className="weather">
              <div className="icon">
                <span className="material-icons"> wb_cloudy </span>
              </div>
              <div className="status">Cloudy</div>
            </div>
            <div className="temperature">
              <div className="temperature-high">20°</div>
              <div className="temperature-low">17°</div>
            </div>
          </div>
          {/* <!--day--> */}

          <div className="week-days">
            <div className="day">Tue</div>
            <div className="weather">
              <div className="icon">
                <span className="material-icons"> ac_unit </span>
              </div>
              <div className="status">Snow</div>
            </div>
            <div className="temperature">
              <div className="temperature-high">20°</div>
              <div className="temperature-low">-17°</div>
            </div>
          </div>
          {/* <!--day--> */}

          <div className="week-days">
            <div className="day">Wed</div>
            <div className="weather">
              <div className="icon">
                <span className="material-icons"> thunderstorm </span>
              </div>
              <div className="status">Thunderstorm</div>
            </div>
            <div className="temperature">
              <div className="temperature-high">20°</div>
              <div className="temperature-low">17°</div>
            </div>
          </div>
          {/* <!--day--> */}

          <div className="week-days">
            <div className="day">Thu</div>
            <div className="weather">
              <div className="icon">
                <span className="material-icons"> wb_twighlight </span>
              </div>
              <div className="status">Partially Sunny</div>
            </div>
            <div className="temperature">
              <div className="temperature-high">20°</div>
              <div className="temperature-low">17°</div>
            </div>
          </div>
          {/* <!--day--> */}

          <div className="week-days">
            <div className="day">Fri</div>
            <div className="weather">
              <div className="icon">
                <span className="material-icons"> sunny </span>
              </div>
              <div className="status">Sunny</div>
            </div>
            <div className="temperature">
              <div className="temperature-high">25°</div>
              <div className="temperature-low">20°</div>
            </div>
          </div>
          {/* <!--day--> */}
        </div>
        {/* list */}
      </div>
    </div>
  );
}

export default index;
