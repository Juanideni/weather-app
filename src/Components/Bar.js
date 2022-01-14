
import {Navbar, Container} from "react-bootstrap"

function Bar(){
    return(
        <>
        <Navbar className="nav" >
            <Container >
                <Navbar.Collapse className="justify-content-center">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src="weather-icon.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    WeatherForecast
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Collapse>
            </Container>
        </Navbar>
                    </>
    )
}
export default Bar;