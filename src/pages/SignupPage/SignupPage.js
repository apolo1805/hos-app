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
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [showError, setShowError] = useState(false);
    const [isCommittee, setCommittee] = useState(false);
    

    if (activeUser) {
        return (<Redirect to="/dashboard"/>);
    }

    function handleClick(e) {
        e.preventDefault();

        addUser({fname, lname, email, password, address, apartment, isCommittee});

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

                {isCommittee ?
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="fname" placeholder="Enter your first name" value={fname} onChange={(e) => setFname(e.target.value)}/>
                        </Form.Group>
                    </Form.Row> : ''
                }

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridLname">
                    <Form.Label>Last Name</Form.Label>
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

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Building Address</Form.Label>
                        <Form.Control placeholder="Street and city" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridApartment">
                        <Form.Label>Apartment Number</Form.Label>
                        <Form.Control type="number" min="0" placeholder="Your apartment number" value={apartment} onChange={(e) => setApartment(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formUserType">
                        <Form.Check
                            type="switch"
                            id="user-switch"
                            onChange={() => setCommittee(!isCommittee)}
                            label={isCommittee ? "Committee" : "Tenant"}
                        />
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