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
                          <br></br>
                            <Form>
                            <Form.Group className="mb-3">
                            <Form.Label onChange={props.sendId(cities.woeid)}></Form.Label>
                            </Form.Group>
                            </Form>
                        
                          </>
                      </li>
                      
                      </>
                      )) 
                  }
          </ul>
         
          
          </>
    )
}
export default City;

