import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"
import NameForm from './naming_form'
import DescriptionForm from './description_form'
import CostForm from './cost'
import SiteDetails from "./site_details";
import Amenities from "./amenenities_checklist";
import Activities from "./activities";
import CheckInForm from "./check_in_form";
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      step: 1,
      host_id: this.props.currentUser.id,
      name: "",
      description: "",
      cost: '',
      check_in_time: "02:00 PM",
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
      is_fishing:false,
      is_swimming:false,
      is_hiking:false,
      is_paddling: false,
      is_wildlife: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput=this.handleInput.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.toggleBoolean = this.toggleBoolean.bind(this)
    this.numberInput = this.numberInput.bind(this)
    this.navigateToHome = this.navigateToHome.bind(this)
  }
    handleSubmit(e) {
      e.preventDefault();
      this.props.createForm(this.state);
      if (this.props.errors.length===0){
      this.navigateToHome()
      }
    }
    navigateToHome() {
      this.props.history.push('/')
    } 
      // <Link to={`/listings/${this.props.listing.id}`}></Link>
    
    handleInput(type) {
      return e => {
        this.setState({ [type]: e.currentTarget.value })
      }
    }

  numberInput(type) {
    const regex = /^[0-9\b]+$/;
    // const numArray =[0,1,2,3,4,5,6,7,8,9,',','$']
    
    return e => {
      if (e.currentTarget.value === '' || regex.test(e.currentTarget.value)) {
    //  let formatNumber = (Number(e.currentTarget.value.replace(/\D/g, '')) || '').toLocaleString()
        this.setState({ [type]: e.currentTarget.value})
      }
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
  componentDidMount() {
    this.props.clearErrors()
  }
  showErrors() {
    let singleError = this.props.errors[0]
    return singleError;
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
      <div>
      <React.Fragment>
      <form onSubmit = {this.handleSubmit} className = 'create-listing-form'>
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
        handleNumInput={this.numberInput}
        cost = {this.state.cost}
        minNight={this.state.minimum_night}
        handleInput={this.handleInput}
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
            
            />
            <Activities
              currentPage={this.state.step}
              nextPage={this.nextStep}
              prevPage={this.previousStep}
              toggleCheck={this.toggleBoolean}
            />
          <CheckInForm
              currentPage={this.state.step}
              nextPage={this.nextStep}
              prevPage={this.previousStep}
              handleInput={this.handleInput}
              arrival={this.state.on_arrival}
              checkOut={this.state.check_out_time}
              checkIn={this.state.check_in_time}
              minNight={this.state.minimum_night}
              history={this.navigateToHome}
          />
      </form>
      </React.Fragment>
      </div>
    )

      }
    }


export default ListingForm