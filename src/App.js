import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import usersJSON from './data/users.json';
import { useState } from 'react';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import messagesJSON from './data/messages.json';

function App() {

  const [users, setUsers] = useState(usersJSON);
  const [activeUser, setActiveUser] = useState(null);

  function authenticate(username, password) {
    for(const user of users) {
      if (user.username === username && user.password === password) {
        setActiveUser(user);
        break;
      }
    }
  }

  function onLogout() {
    setActiveUser(null);
    console.log(users)
  }

  function addNewUser(newUser) {
    for(const user of users) {
      if (user.username === newUser.username) {
        return;
      } else {
        setActiveUser(newUser);
        
        setUsers(users.concat({
          "id": parseInt(users.length) + 1,
          "fname": newUser.fname,
          "lname": newUser.lname,
          "username": newUser.username,
          "password": newUser.password
        }));
      }
    }
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>HOS App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {!activeUser ? <Nav.Link href="#login">Login</Nav.Link> : ''}
                {!activeUser ? <Nav.Link href="#signup">Signup</Nav.Link> : ''}
                {activeUser ? <Nav.Link onClick={() => onLogout()}>Logout</Nav.Link> : ''}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage handleSubmit={authenticate} activeUser={activeUser}/>
          </Route>
          <Route exact path="/signup">
            <SignupPage addUser={addNewUser} activeUser={activeUser}/>
          </Route>
          <Route exact path="/dashboard">
            {activeUser ? <DashboardPage users={users} messages={messagesJSON } activeUser={activeUser}/> : <Redirect to="/"/>}
          </Route>
        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
