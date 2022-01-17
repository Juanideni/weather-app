import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function City(props) {
  const [city, setCity] = useState([]);
  const [show, setShow] = useState(false);
 

  const handleShow = () => setShow(true);
  const handleClose = () =>  window.location.reload();

  useEffect(() => {
    if (props.name !== "") {
      fetch(
        `https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/search/?query=${props.name}`
      )
        .then((res) => res.json())
        .then((res) => {
          if(res.length >= 1){
            setCity(res);
          }
          else {
            handleShow()
          }
        });
    }
  });

  return (
    <>
        <ul>
          {city.map((cities) => (
            <li key="cities.id">{props.sendId(cities.woeid)}</li>
          ))}
                   
        </ul>
       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🛑 ERROR! 🛑</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.name} not found! Sorry 😔
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default City;
