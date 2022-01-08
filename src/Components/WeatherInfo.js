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
                           
                                    
                                    {
                                        (dayjs(clima.applicable_date).format("dddd DD/MM/YYYY") === todayDate) ?
                                        <>
                                        
                                            
                                                
                                                <h1>
                                                    {props.name}
                                                    </h1>
                                                    <h4>
                                                    {dayjs(clima.applicable_date).format("dddd")}<br></br>
                                                    {dayjs(clima.applicable_date).format("DD/MM")}
                                                    </h4>
                                                    <br></br>
                                                        
                                                <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${clima.weather_state_abbr}.svg`} alt="" /><br></br>
                                                  
                                               
                                                
                                                <p>{clima.weather_state_name}</p>
                                                <p>Min temp: {Number(clima.min_temp).toFixed(2)}° </p>
                                                <p>Max temp: {Number(clima.max_temp).toFixed(2)}°</p>
                                                <p>Current temp: {Number(clima.the_temp).toFixed(2)}°</p>
                                                <p>Air pressure: {clima.air_pressure} hPa</p>
                                                <p>Humidity: {clima.humidity} % </p>
                                                <hr></hr>
                                                 
                                                
                                        
                                        </>
                                        :
                                        <>
                                        
                                        <p>
                                            
                                            <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${clima.weather_state_abbr}.svg`} alt="" /><br></br>
                                            {dayjs(clima.applicable_date).format("ddd")}
                                            <p>{Number(clima.min_temp).toFixed(1)} - {Number(clima.max_temp).toFixed(1)}</p>
                                            </p>
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