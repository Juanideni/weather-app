import {useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputs from './Components/Inputs';
import City from "./Components/City";
import WeatherInfo from "./Components/WeatherInfo";
import Bar from "./Components/Bar";
import TodayWeather from "./Components/TodayWeather";


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
      <Bar />
      <Inputs
        sendName={sendName}
        
      />
      <City name={city} sendId={sendId} />
      <TodayWeather id={idCity} name={city}  />
      <WeatherInfo id={idCity} />
    </>
  );
}

export default App;
