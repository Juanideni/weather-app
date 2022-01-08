
import {Form, Col, Row, Button} from "react-bootstrap"
import {useState} from "react"


function Inputs(props){


    const [cityName, setCityName] = useState("")
    
    function getName(e){
        setCityName(e.target.value)
        
    }

    
   

    return (
        <>

            <Form >
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Enter city name:
                </Form.Label>
                <Col sm="10">
                <Form.Control 
                    type="search"
                    name = "title"
                    placeholder="Normal text" 
                    onInput={getName}   
                 />
                 
               
                </Col>
            </Form.Group>
            <Button onClick={() => props.sendName(cityName)}>Get weather</Button>
            </Form>


        
        </>
        
        )
    }
    export default Inputs;
    //<Button variant="primary" onClick={() => props.sendName(cityName)}>Search</Button>