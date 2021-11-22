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
    // console.log(this.props.errors)
    
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className='session-forms'>
          <h3>Sign up and discover new places!</h3>
        <form onSubmit={this.handleSubmit}>
          {/* {console.log(Array.from(this.props.errors))} */}
          {this.props.errors}
          <label>
            <input
              placeholder='First name'
              type="text"
              value={this.state.fname}
              onChange={this.handleInput('fname')}
            />
          </label>
          <label>
            <input
              placeholder = 'Last name'
              type="text"
              value={this.state.lname}
              onChange={this.handleInput('lname')}
            />
          </label>
          <br />
          <label>
            <input type="password"
              placeholder = 'Password'
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <label>
            <input type="text"
              placeholder='Email address'
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <input className = "sign-up-sign-in-button" type="submit" value= "Sign up" />
          <div className = 'link-to-signup'>
            <p>Already a member? <Link className = "login-sign-up-link" to='/login'>Log In!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default SessionForm;