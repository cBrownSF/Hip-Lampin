import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"

class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      name: "",
      description: "",
      cost: '',
      checkInTime: '',
      name: "",
      description: "",
      cost: '',
      checkInTime: '',
      checkOuttime: '',
      responseTime: '',
      onArrival: '',
      guestAllowed: '',
      minimumNight: '',
    };
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
  render() {
    return (
      <div className=''>
        <h2 className></h2>

        <form className="" onSubmit={this.handleSubmit}>

          {/* <p className="errors">{this.showErrors()}</p> */}
          <label>
            <h3> Name your Listing</h3>
            <p>This should be a short title describing your site and landcscape</p>
            <input className=''
              type="text"
              placeholder='e.g cozy cottage'
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
            <h2>Tips for naming your listing</h2>
            <ul>
              <li></li>
            </ul>
          </label>
          <label>Describe your listing
            <input className=''
              type="text"
              placeholder='e.g. Stay beneath the stars in our open cottage'
              value={this.state.description}
              onChange={this.handleInput('description')}
            />
          </label>
          <label>Describe your listing
            <input className=''
              type="text"
              placeholder='e.g $80'
              value={this.state.cost}
              onChange={this.handleInput('cost')}
            />
          </label>
            <input className='form-boxes'
              type="text"
              placeholder='e.g. Stay beneath the stars in our open cottage'
              value={this.state.description}
              onChange={this.handleInput('password')}
            />
          </label>
          <input className="sign-up-sign-in-button" type="submit" value='Log in' />
          <div>
            <p className="font-before-link">Don't have an account? <Link className="login-sign-up-link" to='/signup'>Sign Up!</Link ></p>
          </div>
        </form>
      </div >
  }
}