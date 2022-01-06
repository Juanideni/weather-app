import {useState, useEffect} from "react"




function City(props){
    const [city, setCity] = useState([])
    let [cityId] = useState(Number)


    useEffect(()=> {
        if(props.name !== ""){
            fetch(`https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/search/?query=${props.name}`)
            .then(res => res.json())
            .then(
                (res) => {
                    setCity(res)
                }
                )
            }
        })

        

   

    return(
        <>
           <ul>
              {
                  city.map(cities => (
                      <>
                      <li key="cities.id">
                          - {cities.title}<br></br>
                          - {cityId = cities.woeid}
                          
                        
                      </li>
                      <button onClick={() => props.sendId(cityId)}>Get weather</button>
                      </>
                      )) 
                  }
          </ul>
         
          
          </>
    )
}
export default City;

