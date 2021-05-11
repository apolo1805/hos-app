import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">HOS App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#signup">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/signup">
            <SignupPage/>
          </Route>
        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
