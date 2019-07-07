import React, { Component } from "react";



class SignIn extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Existing User</h1>
                <h2>{this.state.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <br></br>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <br></br>
                    <label> Password:</label>
                    <br></br>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                    <br></br>
                </form>
            </div>
        )
    }
}
export default SignIn;