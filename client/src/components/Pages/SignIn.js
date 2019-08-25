import React, {
    useState
} from "react";
import API from "../../utils/API";
import {
    Redirect
} from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    CardBody,
    Card,
    Row,
    Col
} from "reactstrap";


const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const logIn = (usrnme) => {
        localStorage.setItem("username", usrnme);
        setRedirect(true);
    }

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/log' />
        }
    }

    const validatePassword = (savedPW, enteredPW) => {
        return (savedPW === enteredPW)
    }


    const handleSubmit = event => {
        event.preventDefault();
        API.getUser(username).then(result => {
            (result.data ?
                (validatePassword(result.data.password, password) ?
                    logIn(JSON.stringify(result.data.username)) :
                    alert("incorrect password")) :
                alert("user doesn't exist")
            );
        })
    }

    return (
        <Row>
            {renderRedirect()}
            <Col sm="6" md="6" lg="6" className="mx-auto">
                <Card className="loginCard">
                    <CardBody>
                        <h1>Existing User</h1>
                        <h2>{username}</h2>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <Input type="submit" value="Submit" />
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
export default SignIn;