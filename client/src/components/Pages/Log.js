import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/API"
import { Form, FormGroup, Label, Input, CardBody, Card, Row, Col } from "reactstrap"

const Log = () => {
    const [username, setUsername] = useState("");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [distance, setDistance] = useState(0);
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState(false);

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/' />
        }
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("username"));
        (user ? setUsername(user) : setRedirect());
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        API.addRun(username, {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            distance: distance,
            description: description
        }).then(result => {
            console.log(result)
        })
    }

    return (
        <Row>
            <Col sm="6" md="6" lg="6" className="mx-auto">
                <Card className="loginCard">
                    <CardBody>
                        {renderRedirect()}

                        <h1>Log a Run</h1>
                        <h2>{username}</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>Hours</Label>
                                        <Input type="number" name="hours" value={hours} onChange={e => setHours(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>Minutes</Label>
                                        <Input type="number" name="minutes" value={minutes} onChange={e => setMinutes(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>Seconds</Label>
                                        <Input type="number" name="seconds" value={seconds} onChange={e => setSeconds(e.target.value)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label>Distance in Miles</Label>
                                        <Input type="number" name="distance" value={distance} onChange={e => setDistance(e.target.value)} />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleText" >Text Area</Label>
                                        <Input type="textarea" name="description" value={description} onChange={e => setDescription(e.target.value)} />
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





export default Log;