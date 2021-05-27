import React, { useState } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import './Messages.css';

function Messages({users, messages, addMessage}) {

    const [msgInput, setMsgInput] = useState('');
    const comments = messages.comments;

    function handleClick() {
        addMessage(msgInput);
        setMsgInput('');
    }

    return (
        <div className="c-messages">
            <h3>Recent Messages:</h3>
                        
            <ul>
                {messages.map((message, index) => {
                    const name = users.filter(user => user.id === message.userId);
                        return (<li key={index}>
                                    <b>{name[0].fname + " " + name[0].lname}</b>, {message.date}: {message.content}
                                    <ul>{message.comments.map((comment, index) => <li index={index}>{comment}</li>)}</ul>
                                </li>);
                    })
                }
            </ul>

            <InputGroup className="mb-3">
                <FormControl
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.target.value)}
                    placeholder="Write a message..."
                />
                <InputGroup.Append>
                    <Button variant="secondary" onClick={handleClick}>Add A Message</Button>
                </InputGroup.Append>

            </InputGroup>
        </div>
    );
}

export default Messages;