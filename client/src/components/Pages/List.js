import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/API"
import Run from "../Run";
import { CardBody, Card , Row, Col } from "reactstrap"



class List extends Component {
    state = {
        username: "",
        results: []
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

    getRuns = (username) => {
        API.getUser(username).then(results => {
            console.log(results.data.activities)
            this.setState({ "results": results.data.activities })
        })
    }
    componentDidMount = () => {
        let user = JSON.parse(localStorage.getItem("username"));
        if (user) {
            this.setState({ "username": user }, () => {
                this.getRuns(this.state.username);
            })
        } else { this.setRedirect() }



    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Row>
                    <Col>
                        <Card className="runCard">
                            <CardBody className="listCardWrapper">
                                <h4>{this.state.username}'s Runs</h4>
                                    {this.state.results.map(run => {
                                        return (
                                         
                                            <Run
                                            hours={run.hours}
                                            minutes={run.minutes}
                                            seconds={run.seconds}
                                            distance={run.distance}
                                            description={run.description}
                                            key={run.id}
                                            id = {run.id}
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










}

export default List;