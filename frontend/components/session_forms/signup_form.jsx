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
    // const activeUser = Object.assign({}, this.state);
    this.props.submitForm(this.state);
   
  }
  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }

  showErrors() {
    // return (
    //   <ul>
    //     {this.props.errors.map((error, i) => (
    //       <li key={`error-${i}`}>
    //         {error}
    //       </li>
    //     ))}
    //   </ul>
    // );
  }

  render() {
 
    
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className='form-container'>
          <h2 className = "form-main-header">Join Hipcamp</h2>
          <h3 className = 'form-sub-header'>discover the best camping near me</h3>
        <form className = "session-form" onSubmit={this.handleSubmit}>
          
          {this.props.errors}
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

          <div className = 'link-to-signup'>
            <p className= "font-before-link">Already a member? <Link className = "login-sign-up-link" to='/login'>Log In!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default SessionForm;