import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HOS App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <HomePage/>
    </div>
  );
}

export default App;
