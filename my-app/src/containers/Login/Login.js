import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {useHistory} from "react-router-dom";

export default function Login() {
  let histroy = useHistory();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [SSN, setSSN] = useState("");

  function validateForm() {
    return firstName.length > 0 && lastName.length > 0 && SSN.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="SSN">
          <Form.Label>SSN</Form.Label>
          <Form.Control
            type="SSN"
            value={SSN}
            onChange={(e) => setSSN(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit"
                disabled={!validateForm()}
                onClick={() => histroy.push("/Voted")}>
          Login
        </Button>
      </Form>
    </div>
  );
}
