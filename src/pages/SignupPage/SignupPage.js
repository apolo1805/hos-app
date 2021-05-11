import React, { useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import './SignupPage.css';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

function SignupPage({addUser, activeUser}) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    

    if (activeUser) {
        return (<Redirect to="/dashboard"/>);
    }

    function handleClick(e) {
        e.preventDefault();

        addUser(new UserModel(fname, lname, email, password));

        if (!activeUser) {
            setShowError(true);
        }
    }

    return (
        <div className="p-signup">
            <h1>Signup Page</h1>
            <p>
                Please fill in this form to sign up to HOS app:
            </p>
            <Form>
                {showError ? <Alert variant="danger">This email already exists!</Alert> : null}
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="fname" placeholder="Enter first name" value={fname} onChange={(e) => setFname(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lname" placeholder="Enter last name" value={lname} onChange={(e) => setLname(e.target.value)}/>
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

                {/* <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit" onClick={(e) => handleClick(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignupPage;