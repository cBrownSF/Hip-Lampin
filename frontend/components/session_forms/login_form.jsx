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
 clearErrors(e){
   e.preventDefault()
   this.props
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
  componentDidMount() {
    this.props.clearErrors()
  }
  showErrors() {
    let singleError = this.props.errors[0]
    return singleError;
  }
  
  render() {
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className = 'form-container'>
        <h2 className="form-main-header">Welcome Back!</h2>
      
        <form className ="session-form" onSubmit={this.handleSubmit}>
         
          <p className="errors">{this.showErrors()}</p>
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
          <input className= "sign-up-sign-in-button" type="submit" value= 'Log in' />
          <div>
            <p className = "font-before-link">Don't have an account? <Link className = "login-sign-up-link" to='/signup'>Sign Up!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default LoginForm;