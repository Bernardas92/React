import './tasks.css'
import {Container, Navbar, Nav, Row} from "react-bootstrap";
import Task from "../tasks/Tasks";

function Tasks() {
    return(
<>
<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Work</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
<Container>
    <div className="col-12 Welcome">
        <h2>Welcome!</h2>
    </div>
    <Row>
        <div className="col-8 text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum laudantium quas,
                explicabo laboriosam ut magni magnam tenetur facere natus nobis praesentium ipsam fugiat 
                doloremque laborum, nisi veniam nostrum quibusdam modi ducimus esse atque vitae 
                voluptas? Esse cupiditate dolore ipsa ad nihil, quod nostrum quidem. Eligendi nam 
                esse cupiditate aliquam!
                ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati, deleniti quae. Nemo, ducimus voluptatibus. Eius 
                ex omnis, provident cum et minima voluptatem. Quasi minus 
                quo praesentium est blanditiis libero tenetur, voluptate 
                possimus. Itaque magni eos fugiat quos qui aperiam ullam.
                </p>
        </div> 
            <div className="col-4 text-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestias doloribus autem velit sed quibusdam eius quisquam 
                architecto laborum expedita mollitia pariatur, in numquam 
                fugit maiores.
                </p>
            </div>      
    </Row>
</Container>
</>
    );
}
export default Tasks


