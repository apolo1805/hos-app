import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';

function LoginPage({handleSubmit, activeUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);
    
    if (activeUser) {
        return (<Redirect to="/dashboard"/>);
    }
    
    function handleClick(e) {
        e.preventDefault();

        handleSubmit(username, password);

        if (!activeUser) {
            setShowInvalidLogin(true);
        }
    }

    return (
        <div className="p-login">
            <h1>Login Page</h1>
            <p>
                Please enter your email address and password to login to HOS app
            </p>

            <Form>
                {showInvalidLogin ? <Alert variant="danger">Invalid Credentials!</Alert> : null}
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