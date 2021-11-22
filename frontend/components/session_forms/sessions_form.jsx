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
  // showLinks() {
  //   if (this.props.formType === 'signup') {
  //     return (
  //     <div>
  //     <Link to='/login'>LogeeeerIn</Link >
  //     </div>
  //     )
  //   } else {
      
  //     return <Link to='/signup'>Sigeee Up</Link >
  //   }
  // }
  render() {
    console.log(this.props.currentUser)
    if (this.props.currentUser !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <div className = 'signup-form'>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
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
          <input type="submit" value={this.props.formType} />
          <div className = 'link-to-signup'>
            <p>Already a member? <Link to='/signup'>Log In!</Link ></p>
          </div>
        </form>
      </div >
    )
  }
}

export default SessionForm;