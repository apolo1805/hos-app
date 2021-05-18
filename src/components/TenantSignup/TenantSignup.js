import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import './TenantSignup.css';

function TenantSignup({createNewTenant}) {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCick() {
        createNewTenant({fname, lname, email, password});
        setFname('');
        setLname('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className="c-tenantSignup">
            <h3>Create a new tenant account</h3>
            <Form>
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
                
                <Button onClick={() => handleCick()}>Click</Button>
            </Form>
        </div>
    );
}

export default TenantSignup;