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
      lname:''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(this.props.closeModal)
    debugger;
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
    // if (this.props.currentUser !== undefined) {
    //   return <Redirect to='/' />
    // }
    return (
      <div className='sign-up-form-container'>
        <h1>Join Hipcamp</h1>
        <form className = "session-form" onSubmit={this.handleSubmit}>
         <p className = "errors">{this.showErrors()}</p>
          <label>
            <input className='form-boxes'
              placeholder='First name'
              type="text"
              value={this.state.fname}
              onChange={this.handleInput('fname')}
            />
          </label>
          <label >
            <input className='form-boxes'
              placeholder = 'Last name'
              type="text"
              value={this.state.lname}
              onChange={this.handleInput('lname')}
            />
          </label>
          <label >
            <input className='form-boxes'
              type="password"
              placeholder = 'Password'
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
          <input className = "sign-up-sign-in-button" type="submit" value= "Sign up" />
            <hr className = "line-break"/>
          <div className = 'link-to-signup'>
            <p className= "font-before-link">Already a member? {this.props.switchForms}</p>
          </div>
        </form>
      </div >
    )
  }
}

export default SessionForm;