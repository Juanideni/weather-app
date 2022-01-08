import {useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputs from './Components/Inputs';
import City from "./Components/City";
import WeatherInfo from "./Components/WeatherInfo";

function App(props) {

  const [city, setCity] = useState("")
  const [idCity, setIdCity] = useState(Number)
 
  function sendName(callbackName){
    setCity(callbackName)
  }

  function sendId(callbackId){
    setIdCity(callbackId)
  }

  return (
    <>
    <Inputs sendName = {sendName}/>
    <City name = {city} sendId={sendId}/>
    <WeatherInfo id = {idCity} name={city}/>

    </>
  );
}

export default App;
