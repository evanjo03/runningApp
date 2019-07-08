import React, { Component } from "react";
import API from "../../utils/API"



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
        API.getUser(this.state.username).then(result => {
            (result.data ? 
                (this.validatePassword(result.data.password, this.state.password) ? 
                localStorage.setItem("username", JSON.stringify(result.data.username)) : 
                alert("incorrect password")) : 
                alert("user doesn't exist")
            );
        })
    }

    validatePassword = (savedPW, enteredPW) => {
        return (savedPW === enteredPW)
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