import {useState, useEffect} from "react"
import {Form} from "react-bootstrap"




function City(props){
    const [city, setCity] = useState([])



    useEffect(()=> {
            fetch(`https://the-ultimate-api-challenge.herokuapp.com/www.metaweather.com/api/location/search/?query=${props.name}`)
            .then(res => res.json())
            .then(
                (res) => {
                    setCity(res)
                    
                }
            )  
        })
    
  

        

   

    return(
        <>
           <ul>
              {
                  city.map(cities => (
                      <>
           
                      <li key="cities.id">
                          <>
                            <Form>
                            <Form.Group className="mb-3">
                                <Form.Label column sm="2">
                                    {cities.title}<br></br>
                                </Form.Label>
                                </Form.Group>
                            </Form>
                        
                          </>
                      </li>
                      <button onClick={() => props.sendId(cities.woeid)}>Get weather</button>
                      </>
                      )) 
                  }
          </ul>
         
          
          </>
    )
}
export default City;
//{() => props.sendId(cityId)}
