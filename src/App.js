import './App.css';
import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import usersJSON from './data/users.json';
import messagesJSON from './data/messages.json';
import MessageModel from './model/MessageModel';
import UserModel from './model/UserModel';

function App() {

  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState(messagesJSON.map(plainMessage => new MessageModel(plainMessage)));

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
  }

  function addNewUser(user) {
    const newUser = new UserModel({
      "fname": user.fname,
      "lname": user.lname,
      "username": user.username,
      "password": user.password
    });

    for(const user of users) {
      if (user.username === newUser.username) {
        return;
      } else {
        setActiveUser(newUser);
        
        setUsers(users.concat({
          "id": (parseInt(users.length) + 1).toString(),
          "fname": newUser.fname,
          "lname": newUser.lname,
          "username": newUser.username,
          "password": newUser.password
        }));
      }
    }
  }

  function addNewMessage(msg) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    date = day + "/" + month + "/" + year;
    
    const newMsg = new MessageModel({
      "date": date,
      "msg": msg
    });
    
    setMessages(messages.concat({
      "id": (parseInt(messages.length) + 1).toString(),
      "userId": activeUser.id,
      "date": date,
      "content": newMsg.msg
    }));
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>HOS App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : ''}
                {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : ''}
                {activeUser ? <Nav.Link onClick={() => onLogout()}>Logout</Nav.Link> : ''}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage handleSubmit={authenticate} users={users} activeUser={activeUser} onLogin={(user) => setActiveUser(user)}/>
          </Route>
          <Route exact path="/signup">
            <SignupPage addUser={addNewUser} activeUser={activeUser}/>
          </Route>
          <Route exact path="/dashboard">
            {activeUser ? <DashboardPage users={users} messages={messages} activeUser={activeUser} addMessage={addNewMessage}/> : <Redirect to="/"/>}
          </Route>
        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
