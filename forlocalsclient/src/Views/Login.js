import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LoginLocal } from '../Data/authManager';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
        LoginLocal(email, password)
            .then(() => navigate("/localProfile"))
            .catch(() => alert("Login Failed"));
    };

    return (
        <div className="main-body-div">
            <div className='navbar-spacing'></div>
            <div className="login-form-container">
                <h1> Hi! Please Login </h1>
                <Form onSubmit={loginSubmit}>
                    <fieldset>
                        <FormGroup>
                            <Label for="login-email">Email
                            </Label>
                            <Input id="login-email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="login-password">Password
                            </Label>
                            <Input id="login-password" type="password" autoFocus onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Button id="login-button">Login
                            </Button>
                        </FormGroup>
                        <em>
                            Not Registered? <Link to={'/register'}>Register</Link>
                        </em>
                    </fieldset>
                </Form>
            </div>
        </div>
        );
}
