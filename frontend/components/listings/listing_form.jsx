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
        
      </div >
    )
  }
}