import React, { Component } from "react";


class Log extends Component {
    state = {
        user: "",
        hours: 0,
        minutes: 0,
        seconds: 0,
        distance: 0,
        description: ""
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        
    }

    render() {
        return (
            <div>
                <h1>Log</h1>
                <h2>{this.state.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> Duration: </label>
                    <br></br>
                    <input type="number" name="hours" value={this.state.hours} onChange={this.handleChange} />
                    <input type="number" name="minutes" value={this.state.minutes} onChange={this.handleChange} />
                    <input type="number" name="seconds" value={this.state.seconds} onChange={this.handleChange} />
                    <br></br>
                    <label>Distance (miles):</label>
                    <br></br>
                    <input type="number" name="distance" value={this.state.distance} onChange={this.handleChange} />
                    <br></br>
                    <label> Comments:</label>
                    <br></br>
                    <textarea type="text" name="comments" value={this.state.comments} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }










}

export default Log;