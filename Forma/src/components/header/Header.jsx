import {Navbar, Container} from "react-bootstrap";
const Header = ()=>{
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Kontaktai
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        Kontaktine forma
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header