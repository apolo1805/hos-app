import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';

function LoginPage({handleSubmit}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleClick(e) {
        e.preventDefault();
        handleSubmit(username, password);
    }

    return (
        <div className="p-login">
            <h1>Login Page</h1>
            <p>
                Please enter your email address and password to login to HOS app
            </p>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="email-input" type="email" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="password-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;