import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Label, Input, CardBody, Card , Row, Col } from "reactstrap"



class SignIn extends Component {
    state = {
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
        API.getUser(this.state.username).then(result => {
            (result.data ? 
                (this.validatePassword(result.data.password, this.state.password) ? 
                this.logIn(JSON.stringify(result.data.username)) : 
                alert("incorrect password")) : 
                alert("user doesn't exist")
            );
        })
    }

    validatePassword = (savedPW, enteredPW) => {
        return (savedPW === enteredPW)
    }

    logIn = (username) => {
        localStorage.setItem("username", username);
        this.setRedirect();

    }

    render() {
        return (
            <Row>
                {this.renderRedirect()}
            <Col sm="6" md="6" lg="6" className="mx-auto">
                <Card className="loginCard">
                <CardBody>
            {this.renderRedirect()}
            
            <h1>Existing User</h1>
            <h2>{this.state.name}</h2>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label>Username</Label>
                <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </FormGroup>
                <Input type="submit" value="Submit" />
            </Form>
            </CardBody>
            </Card>
            </Col>
            </Row>
        )
    }
}
export default SignIn;