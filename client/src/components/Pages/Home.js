import React, { Component, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import API from "../../utils/API"
import { Form, FormGroup, Label, Input, CardBody, Card , Row, Col } from "reactstrap"


class Home extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/log' />
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.getUser(this.state.username).then(result => {
            (result.data ? alert("User already exists") :
                API.createUser({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password
                })
                    .then(result => {
                        console.log(result.status)
                        localStorage.setItem("username", JSON.stringify(result.data.username));
                        this.setRedirect();
                    })
            );
        })
    }

    render() {
        return (
            <Row>
                <Col sm="6" md="6" lg="6" className="mx-auto">
                    <Card className="loginCard">
                    <CardBody>
                {this.renderRedirect()}
                
                <h1>New User</h1>
                <h2>{this.state.name}</h2>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </FormGroup>
                    <Input type="submit" value="Submit" />
                    <br></br>
                    <Link to="/signin">Already signed up? Sign in</Link>
                </Form>
                </CardBody>
                </Card>
                </Col>
                </Row>
        )
    }
}
export default Home;