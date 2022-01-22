import React from "react";

export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        user: ""
    }
    handleSubmit = () => {
        this.setState({ user: this.state.username })
    }

    render() {
        let getData = ""
        if (this.state.user !== "") {
            getData = <h1>Hi {this.state.user}, Welcome Back!</h1>
        } else {
            getData = <div> <h1>{this.props.title}</h1>
                <form action="">
                    <label>Username</label><br />
                    <input type="text" onChange={(event) => this.setState({ username: event.target.value })} /><br />

                    <label>Password</label><br />
                    <input type="password" onChange={(event) => this.setState({ password: event.target.value })} /><br />

                    <input type="submit" onClick={this.handleSubmit} /><br /><br />
                </form>
            </div>
        }

        return (
            <div>
                {getData}
            </div>

        )
    }

}


