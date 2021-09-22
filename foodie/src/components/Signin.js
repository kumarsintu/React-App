import React, { useState } from "react";
import "../styles/Signin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="sigin-container">
            <Form >
                <h1 className="signin-heading">SignIn</h1>
                <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                    />
                </Form.Group>
                <Button block size="lg" type="submit" onClick={handleSubmit}>
                    SignIn
                </Button>
            </Form>
        </div>
    );
}

export default Signin;