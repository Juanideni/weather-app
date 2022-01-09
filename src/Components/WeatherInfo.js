import {Card} from "react-bootstrap"
import {useState, useEffect} from "react"

var dayjs = require('dayjs')

function WeatherInfo(props){
    const [weatherInfo, setWeatherInfo] = useState([])
    let todayDate = dayjs(Date.now()).format("dddd DD/MM/YYYY")
   
    useEffect(()=>{
        if(props.id !== 0){
            const fetchData = async () => {
                await fetch(`https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/${props.id}`)
                .then(res => res.json())
                .then(
                    (json) => {
                        setWeatherInfo(json.consolidated_weather)
                    }
                    )
                }
                fetchData()
        }
        else {
            return("")
        }
    })

    

    const imgUrlBase = 'https://www.metaweather.com/static/';
  
    return(
        <>

        
             <ul>  
            {
                weatherInfo.map(clima => (
                    <>
                            <li key="clima.id">
                                <div className="div-day">

                                    {
                                        (dayjs(clima.applicable_date).format("dddd DD/MM/YYYY") === todayDate) ?
                                        <>
                                         <h1>
                                             <h1>{props.name}</h1>
                                             <h1>{dayjs(clima.applicable_date).format("dddd")}</h1>
                                             <h1>{dayjs(clima.applicable_date).format("DD/MM")}</h1>
                                             <h1>{Number(clima.the_temp).toFixed(2)}°</h1>
                                             <h1><img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${clima.weather_state_abbr}.svg`} alt="" /></h1>
                                         <h5>{clima.weather_state_name}</h5>
                                         </h1>
                                         <h5>  
                                                 <h1>Min temp: {Number(clima.min_temp).toFixed(2)}° </h1>
                                                 <h1>Max temp: {Number(clima.max_temp).toFixed(2)}°</h1>
                                                 <h1>Air pressure: {clima.air_pressure} mbar</h1>
                                                 <h1>Humidity: {clima.humidity} % </h1>
                                                 <h1>Wind: {Number(clima.wind_speed).toFixed(1)}mph at {Number(clima.wind_direction).toFixed(1)}° {clima.wind_direction_compass}</h1>
                                                 <h1>Visibility: {Number(clima.visibility).toFixed(1)} miles</h1>
                                                 <hr></hr>
                                         </h5>
                                     </>
                                         :
                                         ""
                                        }
                                    </div>
 
                                    
                                    
                                </li>
                               </>
                            ))
                        }
                    </ul>
                   
        



            
        <ul className="api-ul">  
            {
                weatherInfo.map(clima => (
                    <>
                            <li key="clima.id">
                                    {
                                        <>
                                        <Card className="div-card">
                                            <Card.Body>
                                                <Card.Title>{dayjs(clima.applicable_date).format("ddd")}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{clima.weather_state_name}</Card.Subtitle>
                                                <Card.Text>
                                                <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${clima.weather_state_abbr}.svg`} alt="" /> <br></br>
                                                {Number(clima.min_temp).toFixed(1)}° / {Number(clima.max_temp).toFixed(1)}°
                                                </Card.Text>
                                             
                                            </Card.Body>
                                        </Card>
                                    </>
                                    }
                                    
                                </li>
                               </>
                            ))
                        }
                    </ul>
                   
                
    </>
    )

}
export default WeatherInfo;
