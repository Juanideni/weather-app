import { useState, useEffect } from "react";
import {Modal, Button} from "react-bootstrap"

function City(props) {
  const [city, setCity] = useState([]);
  let [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let idCity

  useEffect(() => {
    if (props.name !== "") {
      fetch(
        `https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/search/?query=${props.name}`
      )
        .then((res) => res.json())
        .then((res) => {
          setCity(res);
        });
    }
  });

  return (
    <>
      <ul>
        {city.map((cities) => (
          <>
            <li key="cities.id">
              {props.sendId(cities.woeid)}
            </li>
          </>
        ))}
      
      </ul>
      
      
    </>
  );
}
export default City;

/*
 */
