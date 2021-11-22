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
    this.showErrors = this.showErrors.bind(this)
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
    return this.props.errors
  }
  
  render() {
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className = 'login form'>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
          {this.showErrors()}
          <label>Email
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <input type="submit" value={this.props.formType} />
          <div className='link-to-sign-up'>
            <p>Don't have an account? <Link to='/signup'>Sign Up!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default LoginForm;