import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"
import NameForm from './naming_form'
import DescriptionForm from './description_form'
import CostForm from './cost'
import SiteDetails from "./site_details";
import Amenities from "./amenenities_checklist";
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      host_id: 11,
      name: "",
      description: "",
      cost: '',
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      response_time: '10 minutes',
      on_arrival: 'Meet and Greet',
      guests_allowed: 1,
      minimum_night: 1,
      cancellation_policy: 'Flexible',
      booking_time: '12 months in advance',
      is_trash: false,
      is_kitchen: false,
      is_shower: false,
      is_wifi: false,
      is_picnic_table:false,
      is_toilet: false,
      is_campfire_allowed: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput=this.handleInput.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.toggleBoolean = this.toggleBoolean.bind(this)
  }
    handleSubmit(e) {
      e.preventDefault();
      debugger;
      console.log(this.state)
      this.props.createForm(this.state);
    }
    handleInput(type) {
      return e => {
        this.setState({ [type]: e.currentTarget.value })
      }
    }

  
    toggleBoolean(type) {
      return e =>{
        if (this.state[type] === false) {
          this.setState({ [type]: true })
        } else {
          this.setState({ [type]: false })
        }
  }
}
//WHY DIDNT WORKreturn e =>{
      //   this.setState(prevState => ({
      //     [type]: !prevState.type
      //   }))
      // }
 
    nextStep () {
      let step = this.state.step
     return (
       this.setState({
      step: step +1
      })
     )
  }
    
    previousStep() {
    let step = this.state.step
    return this.setState({
      step: step - 1
    })
  }

 
  render() {
    
    return (
      <React.Fragment>
      <form onSubmit = {this.handleSubmit}>
      <NameForm 
        currentPage = {this.state.step}
        name = {this.state.name}
        handleInput ={this.handleInput}
        nextPage = {this.nextStep}
      />
      <DescriptionForm  
        currentPage={this.state.step}
        nextPage={this.nextStep}
        prevPage={this.previousStep}
        handleInput={this.handleInput}
        description = {this.state.description}
      />
      <CostForm 
        currentPage={this.state.step}
        nextPage={this.nextStep}
        prevPage={this.previousStep}
        handleInput={this.handleInput}
        cost = {this.state.cost}
        />
      <Amenities
        currentPage={this.state.step}
        nextPage={this.nextStep}
        prevPage={this.previousStep}
        toggleCheck = {this.toggleBoolean}
        />
        <SiteDetails 
            currentPage={this.state.step}
            nextPage={this.nextStep}
            prevPage={this.previousStep}
            handleInput={this.handleInput}
            cancel={this.state.cancellation_policy}
            bookingWindow={this.state.booking_time}
            arrival={this.state.on_arrival}
            // checkOut={this.state.check_out_time}
            // checkIn={this.state.check_in_time}
            />
      </form>
      </React.Fragment>
    )


    // case 3:
    //   <CostForm 
    //     nextPage={this.nextFormStep}
    //     prevPage={this.previousFormStep}
    //     handleInput={this.handleInput}
    //     cost = {this.state.cost}
    //   />
    // default:
    //   return(
    //     'hello'
    //   )
      }
    }


export default ListingForm