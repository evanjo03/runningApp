import React from "react";
import { CardBody, Card , Row, Col } from "reactstrap";
import Moment from 'react-moment';
import 'moment-timezone';

function Run(props) {

    const formatNumber = num => {
        return ("0" + num).slice(-2)
    }

    const secondsConv = sec => {

    }

    let minutes = formatNumber(props.minutes);
    let hours = formatNumber(props.hours);
    let seconds = formatNumber(props.seconds);
    let disance = props.disance;
    let avgPace = "test"



    //date stuff
    let d = new Date("1970", "00", "01");


    return (
        <Row>
            <Col>
            <Card className="runCard">
                <CardBody>
                    <Row key={props.id}>
                        <Col>
                        <Moment format="MM/DD/YYYY"><Moment add={{ milliseconds: props.id }}>{d}</Moment></Moment>
                            <div>
                                <span>{hours}:</span><span>{minutes}:</span><span>{seconds}</span>
                            </div>
                            <div>
                                <span>{props.distance} miles</span>
                            </div>
                            <div>
                                <span>{avgSpd} MPH</span>
                            </div>
                           
                        </Col>
                        <Col>
                            <div>
                                {props.description}
                            </div>
                           
                        </Col>
                    </Row>
            </CardBody>
            </Card>
        </Col>
        </Row>
    )



}

export default Run;