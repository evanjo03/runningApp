import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import API from "../../utils/API"


class Home extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/log' />
        }
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
        API.getUser(this.state.username).then(result => {
            (result.data ? alert("User already exists") :
                API.createUser({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password
                })
                    .then(result => {
                        console.log(result.status)
                        localStorage.setItem("username", JSON.stringify(result.data.username));
                        this.setRedirect();
                    })
            );
        })


    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h1>New User</h1>
                <h2>{this.state.name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <br></br>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <br></br>
                    <label>Last Name:</label>
                    <br></br>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <br></br>
                    <label>Username:</label>
                    <br></br>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <br></br>
                    <label> Password:</label>
                    <br></br>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                    <br></br>
                    <Link to="/signin">Already signed up? Sign in</Link>
                </form>
            </div>
        )
    }
}
export default Home;