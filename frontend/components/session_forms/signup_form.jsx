import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      fname: '',
      lname: ''
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
      <div className='sign-up-form-container'>
        <h1 className="header-sign-forms">Join Hipcamp</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className='first-name-last-name'>
            <input className='form-boxes-first-name'
              placeholder='First name'
              type="text"
              value={this.state.fname}
              onChange={this.handleInput('fname')}
            />
            <input className='form-boxes-last-name'
              placeholder='Last name'
              type="text"
              value={this.state.lname}
              onChange={this.handleInput('lname')}
            />
          </div>
          <label >
            <input className='form-boxes'
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <label>
            <input className='form-boxes'
              type="text"
              placeholder='Email address'
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <div>{this.renderErrors()}</div>
          <input className="sign-up-sign-in-button" type="submit" value="Sign up" />
          <hr className="line-break" />
          <div className='link-to-signup'>
            <p className="font-before-link">Already a member?{this.props.switchForms}</p>
          </div>
        </form>
      </div >
    )
  }
}

export default SessionForm;