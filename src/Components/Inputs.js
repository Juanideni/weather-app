
import {Form, Col, Row, Button, Modal} from "react-bootstrap"
import {useState} from "react"
import { useForm } from "react-hook-form"

function Inputs(props){


    const [cityName, setCityName] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function getName(e){
        setCityName(e.target.value)
    }
    
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => console.log(data);

    
   

    return (
        <>
           
           <Form onSubmit={handleSubmit(onSubmit)} className="formulary">
                    <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                        </Form.Label>
                        <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Enter a city name"
                        name = "title"
                        onInput={getName} 
                        required
                        {...register("title", {
                            required: {
                                value: true,
                                message: "Its required"
                            }
                        })}  
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2" onClick={(cityName === "" ? handleShow : () => props.sendName(cityName.charAt(0).toUpperCase() + cityName.slice(1)))}>
                            Get weather!
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>🛑 ERROR! 🛑</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>You must write a city name! Input text cant be empty</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                    </Row>
            </Form>
            
         

        
        </>
        
        )
    }
    export default Inputs;
   /*
   <Button type="submit" >Get weather</Button>

 
                
                    {errors.title && <span className="max">{errors.title.message}</span>}


   
  

    */