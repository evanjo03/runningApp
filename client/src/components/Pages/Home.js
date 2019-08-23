import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import API from "../../utils/API"
import { Form, FormGroup, Label, Input, CardBody, Card, Row, Col } from "reactstrap"

const Home = () => {

    //hooky bois
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        API.getUser(username).then(result => {
            (result.data ? alert("User already exists") :
                API.createUser({
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password
                })
                    .then(result => {
                        console.log(result.status)
                        localStorage.setItem("username", JSON.stringify(result.data.username));
                        setRedirect(true);
                    })
            );
        })
    }


    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/log' />
        }
    }

    return (
        <Row>
            <Col sm="6" md="6" lg="6" className="mx-auto">
                <Card className="loginCard">
                    <CardBody>
                        {renderRedirect()}
                        <h1>New User</h1>
                        <h2>{firstName}</h2>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
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
export default Home;