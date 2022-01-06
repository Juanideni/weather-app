import {useState, useEffect} from "react"

function WeatherInfo(props){
    const [weatherInfo, setWeatherInfo] = useState([])
    const urlImgBase = 'www.metaweather.com/static/'
   
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
                <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${clima.weather_state_abbr}.svg`} alt="" /><br></br>
                    - Day: {clima.applicable_date} <br></br>
                    - State of the day: {clima.weather_state_name} <br></br>
                    - Min Temp: {clima.min_temp} <br></br>
                    - Max Temp: {clima.max_temp} <br></br>
                    - Current Temp: {clima.the_temp} <br></br>
                    - Air pressure: {clima.air_pressure} <br></br>
                    - Humidity percentage: {clima.humidity} % <br></br>
                    <hr></hr>
                </li>
                
                </>
            ))
        }
    </ul>
    </>
    )

}
export default WeatherInfo;