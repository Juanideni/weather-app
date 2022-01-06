import {useState, useEffect} from "react"

function WeatherInfo(props){
    const [weather, setWeather] = useState([])

    useEffect(()=>{
        if(props.id !== 0){
            const fetchData = async () => {
                await fetch(`https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/${props.id}`)
                .then(res => res.json())
                .then(
                    (json) => {
                        setWeather(json.consolidated_weather)
                    }
                    )
                }
                fetchData()
        }
    })

   

    return(
        <>
        <ul>
        {
            weather.map(clima => (
                <>
                <li key="clima.id">
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