import React, { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './DashboardPage.css';
import 'bootstrap/dist/css/bootstrap.css';

function DashboardPage({users, messages, activeUser, addMessage}) {

    const [msgInput, setMsgInput] = useState('');
    


    function handleClick() {
        addMessage(msgInput);
        setMsgInput('');
    }

    return (
        <div className="p-dashboard">
            <h1>Dashboard</h1>
            <h5 className="greeting">Hello, {activeUser.fname}! Nice to see you again</h5>

            <div className="messages">
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
        </div>
    );
}

export default DashboardPage;