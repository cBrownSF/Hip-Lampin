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
    this.props.submitForm(this.state).then(this.props.closeModal);
  }
  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  componentDidMount() {
    this.props.clearErrors()
  }
  showErrors() {
    let singleError = this.props.errors[0]
    return singleError;
  }
  renderErrors() {
    return (
      <ul className="list-name">
        {this.props.errors.map((error, i) => (
          <li className='errors' key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className='login-mod-form-container'>
        <h1 className="header-sign-forms">Welcome Back!</h1>
      
        <form className ="session-form" onSubmit={this.handleSubmit}>
          <label>
            <input className='form-boxes'
              type="text"
              placeholder='Email address'
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>
            <input className='form-boxes'
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <div>{this.renderErrors()}</div>
          <input className= "sign-up-sign-in-button" type="submit" value= 'Log in' />
          <hr className="line-break" />
          <div className='link-to-signup'>
            <p className="font-before-link">Don't have an account? {this.props.switchForms}</p>
          </div>
        </form>
      </div >
    )
  }
}

export default LoginForm;