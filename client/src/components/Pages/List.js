import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/API"
import Run from "../Run";
import Chart from "../Chart"
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
    const style = {
        chart: {
            width: "100%",
            height: 600
        }
    }

    //lets create an object!!!! :)

    const newData = [
        {
            "id": "distance",
            "color": "hsl(344, 70%, 50%)",
            "data": []
        }
    ]

    results.forEach(result => {
        let yVal = result.distance;

        let time = result.id;

        //time ago in milliseconds that run took place
        let timeDiffFromNow = Date.now() - time;


        //time on x will be time diff from now - milliseconds from a week ago
        let xVal = (604800000 - timeDiffFromNow) / (1000 * 60 * 60 * 24);

        let runObj = {
            "x": xVal,
            "y": yVal
        }

        //push data 
        newData[0].data.push(runObj)
    })


    return (
        <div>
            {renderRedirect()}
            <Card className="runCard">
                <CardBody className="listCardWrapper">
                    <h4>{username}'s Runs</h4>
                    <Row>
                        <Col sm={8}>
                            <div style={style.chart}>
                                <Chart data={newData} />
                            </div>

                        </Col>
                        <Col sm={4}>
                            <div>Data</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </div>
    )
}

export default List;
