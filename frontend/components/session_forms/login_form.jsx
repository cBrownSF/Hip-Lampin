import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }
  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  showErrors() {
    let errorArray = this.props.errors
    return errorArray;
  }
  
  render() {
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className = 'login-form'>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome back!</h1>
          {this.showErrors()}
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <input className= "sign-up-sign-in-button" type="submit" value= 'Log in' />
          <div>
            <p>Don't have an account? <Link className = "login-sign-up-link" to='/signup'>Sign Up!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default LoginForm;