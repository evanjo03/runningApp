import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/API"
import Run from "../Run";
import { CardBody, Card, Row, Col } from "reactstrap"

const List = () => {
    const [username, setUsername] = useState("");
    const [results, setResults] = useState([]);
    const [redirect, setRedirect] = useState(false);

    
    const getRuns = (usnme) => {
        API.getUser(usnme).then(results => {
            console.log(results.data.activities)
            setResults(results.data.activities)
        })
    }
    
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("username"))
        if (user) {
            setUsername(user)
            getRuns(user)
        } else { setRedirect() }
    }, [])


const renderRedirect = () => {
    if (redirect) {
        return <Redirect to='/' />
    }
}

return (
    <div>
        {renderRedirect()}
        <Row>
            <Col>
                <Card className="runCard">
                    <CardBody className="listCardWrapper">
                        <h4>{username}'s Runs</h4>
                        {results.map(run => {
                            return (

                                <Run
                                    hours={run.hours}
                                    minutes={run.minutes}
                                    seconds={run.seconds}
                                    distance={run.distance}
                                    description={run.description}
                                    key={run.id}
                                    id={run.id}
                                />
                            )

                        })}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
)
}
export default List;
