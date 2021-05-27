import React, { useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import './SignupPage.css';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

function SignupPage({addUser, activeUser}) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [showError, setShowError] = useState(false);
    

    if (activeUser) {
        return (<Redirect to="/dashboard"/>);
    }

    function handleClick(e) {
        e.preventDefault();

        addUser({fname, lname, email, password, street, city});

        if (!activeUser) {
            setShowError(true);
        }
    }

    return (
        <div className="p-signup">
            <h1>Signup Page</h1>
            <p>
                Create a new committee memeber account
            </p>
            <Form>
                {showError ? <Alert variant="danger">This email already exists!</Alert> : null}

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridLname">
                    <Form.Label>Family Name</Form.Label>
                    <Form.Control type="lname" placeholder="Enter your last name" value={lname} onChange={(e) => setLname(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridStreet">
                    <Form.Label>Building Address</Form.Label>
                    <Form.Control placeholder="Street and city" value={street} onChange={(e) => setStreet(e.target.value)}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Apartment Number</Form.Label>
                    <Form.Control type="number" min="0" placeholder="Your apartment number" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={(e) => handleClick(e)}>
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default SignupPage;