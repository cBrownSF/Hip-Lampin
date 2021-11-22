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
    // this.showErrors = this.showErrors.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    const activeUser = Object.assign({}, this.state);
    this.props.submitForm(activeUser);
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  showErrors() {
    let errorArray = this.props.errors.responseJSON
    return errorArray;
  }

  render() {
    // console.log(this.props.errors)
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className = 'signup-form'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign up and discover new places!</h1>
          {this.showErrors()}
          <label>First Name:
            <input
              type="text"
              value={this.state.fname}
              onChange={this.update('fname')}
            />
          </label>
          <label>Last Name:
            <input
              type="text"
              value={this.state.lname}
              onChange={this.update('lname')}
            />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <input type="submit" value= "Sign up" />
          <div className = 'link-to-signup'>
            <p>Already a member? <Link to='/signup'>Log In!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default SessionForm;