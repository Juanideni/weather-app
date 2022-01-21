import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

var dayjs = require("dayjs");

function TodayWeather(props) {
  const [country, setCountry] = useState([]);
  const [currentDay, setCurrentDay] = useState([]);
  
  let cityName = props.name

  let firstDay;

  useEffect(() => {
    if (props.id !== 0) {
      const fetchData = async () => {
        await fetch(
          `https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/${props.id}`
        )
          .then((res) => res.json())
          .then((json) => {
            setCurrentDay(json.consolidated_weather);
            setCountry(json.parent);
            
          });
      };
    
      fetchData();
    } else {
      return "";
    }
  });

 

  firstDay = currentDay[0];

  const imgUrlBase = "https://www.metaweather.com/static/";

  return firstDay !== undefined ? (
  
    <>
    {props.loading ? <Spinner animation="border"/> : <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-5 div-day">
      <Card
        style={{ width: "23.5rem", height: "18rem" }}
        className="main-day"
        >
        <Card.Title className="title" >
          
          <h2>{cityName}</h2>

          <h2>🌡 {Number(firstDay.the_temp).toFixed(0)} °C</h2>
        </Card.Title>
        <Card.Subtitle className="mb-2 ">
          <h5>{country.title}</h5>
          {dayjs(firstDay.applicable_date).format("dddd")}{" "}
          {dayjs(firstDay.applicable_date).format("DD/MM")}
        </Card.Subtitle>
        <Card.Body>
          <hr></hr>
          <div className="div-text">
            <Card.Text className="text">
              <h3>
                <img
                  className="mb-2"
                  width="30"
                  src={`${imgUrlBase}img/weather/${firstDay.weather_state_abbr}.svg`}
                  alt=""
                />
              </h3>
              <h3>{firstDay.weather_state_name}</h3>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <h5>
        <h3>Min temp: {Number(firstDay.min_temp).toFixed(0)} °C </h3>
        <h3>Max temp: {Number(firstDay.max_temp).toFixed(0)} °C</h3>
        <h3>
          Air pressure: {Number(firstDay.air_pressure).toFixed(0)} mbar
        </h3>
        <h3>Humidity: {Number(firstDay.humidity).toFixed(0)} % </h3>
        <h3>
          Wind: {Number(firstDay.wind_speed).toFixed(0)} mph at{" "}
          {Number(firstDay.wind_direction).toFixed(0)}°{" "}
          {firstDay.wind_direction_compass}
        </h3>
        <h3>
          Visibility: {Number(firstDay.visibility).toFixed(0)} miles
        </h3>
      </h5>
    </div>}
    
  </> 
  
     
  ) : (
    ""
  );
    
}

export default TodayWeather;

