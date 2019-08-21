import React from "react";
import { CardBody, Card , Row, Col } from "reactstrap";
import Moment from 'react-moment';
import 'moment-timezone';

function Run(props) {

    //converts a number to a two digit
    const formatNumber = num => ("0" + num).slice(-2);

    //converts our props into a total second value
    const convertStringTimeToIntSec = (hr, min, sec) => {
        return parseInt(hr) * 3600 + parseInt(min) * 60 + parseInt(sec);
    }

    //find average pace
    const findAvgPace = (seconds, dist) => {
        const arr = [];
        let avgPace = seconds / dist;
        let avgPaceMin = Math.floor(avgPace / 60);
        let avgPaceSec = Math.round(avgPace - avgPaceMin * 60);
        arr.push(avgPaceMin); arr.push(avgPaceSec);
        return arr;
    }

    //formatting our props
    let minutes = formatNumber(props.minutes);
    let hours = formatNumber(props.hours);
    let seconds = formatNumber(props.seconds);
    let distance = props.distance;
    //convert time into seconds
    let totalSeconds = convertStringTimeToIntSec(props.hours, props.minutes, props.seconds);
    //returns array with minute and second mile average
    let paceArray = findAvgPace(totalSeconds, parseInt(distance));
    let mileAvgMin = formatNumber(paceArray[0]);
    let mileAvgSec = formatNumber(paceArray[1]);

    //average pace in seconds per mile


    //date stuff
    let d = new Date("1970", "00", "01");


    return (
        <Row>
            <Col>
            <Card className="runCard">
                <CardBody>
                    <Row key={props.id}>
                        <Col>
                        
                            <div>
                                <span className="runDist">{props.distance} miles</span>
                            </div>
                            <div>
                                <span>{hours}:</span><span>{minutes}:</span><span>{seconds}</span>
                            </div>

                            <div>
                                <span>{mileAvgMin}:{mileAvgSec} Mile</span>
                            </div>
                            
                            <div>
                                <span><Moment format="MM/DD/YYYY"><Moment add={{ milliseconds: props.id }}>{d}</Moment></Moment></span>
                            </div>
                            
                           
                        </Col>
                        <Col>
                            <div>
                                <img className="img-fluid runnerLogo" src="../../assets/images/runnerLogo.png" alt="runner logo"/>
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