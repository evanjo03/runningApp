import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/API"
import { Form, FormGroup, Label, Input, CardBody, Card , Row, Col } from "reactstrap"


class Log extends Component {
    state = {
        username: "",
        hours: 0,
        minutes: 0,
        seconds: 0,
        distance: 0,
        description: "",
        redirect: false
    }


    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    componentDidMount = () => {
        let user = JSON.parse(localStorage.getItem("username"));
        (user ? this.setState({ "username": user }) : this.setRedirect());

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
        API.addRun(this.state.username, {
            hours: this.state.hours,
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            distance: this.state.distance,
            description: this.state.description
        }).then(result => {
            console.log(result)
        })

    }

    render() {
        return (
            <Row>
            <Col sm="6" md="6" lg="6" className="mx-auto">
                <Card className="loginCard">
                <CardBody>
            {this.renderRedirect()}
            
            <h1>Log a Run</h1>
            <h2>{this.state.name}</h2>
            <Form onSubmit={this.handleSubmit}>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                        <Label>Hours</Label>
                        <Input type="number" name="hours" value={this.state.hours} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label>Minutes</Label>
                        <Input type="number" name="minutes" value={this.state.minutes} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label>Seconds</Label>
                        <Input type="number" name="seconds" value={this.state.seconds} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                        <Label>Distance in Miles</Label>
                        <Input type="number" name="distance" value={this.state.distance} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                        <Label for="exampleText" >Text Area</Label>
                        <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
                        </FormGroup>
                        <Input id="submit-button" type="submit" value="Submit" />
                    </Col>
                </Row>
            </Form>
            </CardBody>
            </Card>
            </Col>
            </Row>
            
        )
    }










}

export default Log;