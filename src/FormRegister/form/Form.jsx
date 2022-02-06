import React from "react";
import Input from '../input/Input'
import * as Validator from "validatorjs";
import '../style.css'



export default class Form extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        term: false,
        message: {
            errorName: '',
            errorEmail: '',
            errorPassword: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        let rules = {
            name: 'required',
            email: 'required|email',
            password: 'min:8|required'
        }

        let validation = new Validator(data, rules)

        // Kalau Berhasil Keluar Alert
        validation.passes(() =>
            alert(`
                   Name     : ${this.state.name}
                   E-mail   : ${this.state.email}
                   Password : ${this.state.password}
                   T&C      : ${this.state.term ? 'YES' : 'NO'}`)
        )

        // Kalau gagal ada peringatan
        validation.fails(() => {
            this.setState({
                message: {
                    errorName: validation.errors.get('name'),
                    errorEmail: validation.errors.get('email'),
                    errorPassword: validation.errors.get('password')
                }
            })

        })
    }

    render() {
        return (
            <div className="wrapper" >
                <h2>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        className="input-box"
                        type="text"
                        placeholder="Enter your name"
                        onChange={value => this.setState({ name: value })}
                        message={this.state.message.errorName}
                    />

                    <Input
                        className="input-box"
                        type="text"
                        placeholder="Enter your email"
                        onChange={value => this.setState({ email: value })}
                        message={this.state.message.errorEmail}
                    />

                    <Input
                        className="input-box"
                        type="password"
                        placeholder="Create password"
                        onChange={value => this.setState({ password: value })}
                        message={this.state.message.errorPassword}
                    />

                    <div class="policy">
                        <input
                            type="checkbox"
                            checked={this.state.term}
                            onChange={value => this.setState({ term: value.target.checked })}
                        />
                        <h3>I accept all terms &amp; condition</h3>
                    </div>

                    <div className="input-box button">
                        <input type="Submit" value="Register Now" />
                    </div>
                </form>

            </div>
        )
    }
}