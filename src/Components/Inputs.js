import {Form, Col, Row, Button} from "react-bootstrap"
import {useState} from "react"

function Inputs(props){
    const [cityName, setCityName] = useState("")
    
    function getName(e){
        setCityName(e.target.value)
    }
   

    return (
        <>
            <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Enter city name:
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Normal text" onInput={getName}/>
                </Col>
            </Form.Group>
            <Button variant="outline-success" onClick={() => props.sendName(cityName)}>Success</Button>
            </Form>
        
        </>
        
    )
}
export default Inputs;