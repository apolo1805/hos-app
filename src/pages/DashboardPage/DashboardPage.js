import React, { useContext, useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './DashboardPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import TenantSignup from '../../components/TenantSignup/TenantSignup';
import UsersContext from '../shared/UsersContext';
import UserModel from '../../model/UserModel';

function DashboardPage({messages, activeUser, addMessage}) {

    const [msgInput, setMsgInput] = useState('');
    var users = useContext(UsersContext);


    function handleClick() {
        addMessage(msgInput);
        setMsgInput('');
    }

    function createNewTenant(user) {
        const newUser = new UserModel({
          "id": (parseInt(users.length) + 1).toString(),
          "fname": user.fname,
          "lname": user.lname,
          "username": user.email,
          "password": user.password,
          "street": activeUser.street,
          "city": activeUser.city,
          "isCommittee": false
        });
    
        users = users.concat(newUser);
        alert("New tenant user was created successfully!");
      }

    return (
        <div className="p-dashboard">
            <h1>Dashboard</h1>
            <h5 className="greeting">
                Hello, {activeUser.isCommittee ?
                    activeUser.fname + " " + activeUser.lname :
                        activeUser.lname + " Family"}! Nice to see you again
            </h5>
            
            <div className="container">
                <div className="border">
                    <h3>Recent Messages:</h3>
                    
                    <ul>
                        {messages.map((message, index) => {
                            const name = users.filter(user => user.id === message.userId);
                                return (<li key={index}>
                                            <b>{name[0].fname + " " + name[0].lname}</b>, {message.date}: "{message.content}"
                                        </li>);
                            })
                        }
                    </ul>

                    <InputGroup className="mb-3">
                        <FormControl
                            value={msgInput}
                            onChange={(e) => setMsgInput(e.target.value)}
                            placeholder="Write a message..."
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="secondary" onClick={handleClick}>Send</Button>
                        </InputGroup.Append>

                    </InputGroup>
                </div>

                <div className="border">
                    <h3>Building Address:</h3>
                    {activeUser.street}, {activeUser.city}
                </div>

                <div className="border">
                    {activeUser.isCommittee ? <TenantSignup createTenant={createNewTenant}/> : ''}
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;