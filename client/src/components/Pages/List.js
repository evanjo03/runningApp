import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/API"
import Run from "../Run";


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
                <h1>List</h1>
                <h2>{this.state.username}</h2>
                {this.state.results.map(run => {
                    return (
                        <Run
                            hours={run.hours}
                            minutes={run.minutes}
                            seconds={run.seconds}
                            comments={run.comments}
                            key={run.id}
                        />
                    )

                })}

            </div>
        )
    }










}

export default List;