import { Card, Spinner, Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

var dayjs = require("dayjs");

function WeatherInfo(props) {
  const [weatherInfo, setWeatherInfo] = useState([]);
  

  

  useEffect(() => {
    if (props.id !== 0) {
      const fetchData = async () => {
        await fetch(
          `https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/${props.id}`
        )
          .then((res) => res.json())
          .then((json) => {
            setWeatherInfo(json.consolidated_weather);
            
          });
      };
      fetchData();
    } else {
      return "";
    }
  });

  const imgUrlBase = "https://www.metaweather.com/static/";
  
  
  return (
    <>
     
      <ul className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-6 g-6  ">
        {weatherInfo.map((days) => (
          <>
            <li key="days.id">
              <div className="api-ul">
                {
                  <>
                    <Card className="div-card">
                      <Card.Body>
                        <Card.Title>
                          {dayjs(days.applicable_date).format("dddd")}{" "}
                          {dayjs(days.applicable_date).format("DD/MM")}
                        </Card.Title>
                        <hr></hr>
                        <Card.Subtitle className="mb-2 text-muted text-days">
                          {days.weather_state_name}
                        </Card.Subtitle>

                        <Card.Text className="text-days">
                          <img
                            className="mb-2"
                            width="30"
                            src={`${imgUrlBase}img/weather/${days.weather_state_abbr}.svg`}
                            alt=""
                          />{" "}
                          <br></br>
                          <h5 className="text-days">
                            <span className="min">
                              {Number(days.min_temp).toFixed(0)} °C
                            </span>{" "}
                            /{" "}
                            <span className="max">
                              {Number(days.max_temp).toFixed(0)} °C
                            </span>
                          </h5>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </>
                }
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
export default WeatherInfo;
