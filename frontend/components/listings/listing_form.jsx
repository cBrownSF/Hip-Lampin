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
import PhotoForm from "./photos";
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    debugger;
    console.log(this.props)
    const listing = this.props.listing
 
    this.state = {
      step: this.props.location.state.value || 1,
      host_id: this.props.currentUser.id,
      name: listing.name || "",
      description: listing.description || "",
      cost: this.props.listing.cost || '',
      check_in_time: this.props.listing.check_in_time ||"02:00 PM",
      check_out_time: this.props.listing.check_out_time|| "12:00 PM",
      response_time: '10 minutes',
      on_arrival: this.props.listing.on_arrival ||'Meet and Greet',
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
      is_wildlife: false,
      photoFile: null,
      photoUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput=this.handleInput.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.toggleBoolean = this.toggleBoolean.bind(this)
    this.numberInput = this.numberInput.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.descriptNextStep = this.descriptNextStep.bind(this)
    this.letterCount = this.letterCount.bind(this)
    this.costNextStep=this.costNextStep.bind(this)
    this.nameNextStep=this.nameNextStep.bind(this)
  }
  handleSubmit(e) {

    e.preventDefault();
    const formData = new FormData();
    formData.append('listing[id]', this.props.listing.id)
    formData.append('listing[host_id]', this.state.host_id)
    formData.append('listing[name]', this.state.name)
    formData.append('listing[description]', this.state.description)
    formData.append('listing[cost]', this.state.cost)
    formData.append('listing[check_in_time]', this.state.check_in_time)
    formData.append('listing[check_out_time]', this.state.check_out_time)
    formData.append('listing[response_time]', this.state.response_time)
    formData.append('listing[on_arrival]', this.state.on_arrival)
    formData.append('listing[guests_allowed]', this.state.guests_allowed)
    formData.append('listing[cancellation_policy]', this.state.cancellation_policy)
    formData.append('listing[booking_time]', this.state.booking_time)
    formData.append('listing[minimum_night]', this.state.minimum_night)
    formData.append('listing[is_trash]', this.state.is_trash)
    formData.append('listing[is_toilet]', this.state.is_toilet)
    formData.append('listing[is_kitchen]', this.state.is_kitchen)
    formData.append('listing[is_shower]', this.state.is_shower)
    formData.append('listing[is_wifi]', this.state.is_wifi)
    formData.append('listing[is_picnic_table]', this.state.is_picnic_table)
    formData.append('listing[is_campfire_allowed]', this.state.is_campfire_allowed)
    formData.append('listing[is_fishing]', this.state.is_fishing)
    formData.append('listing[is_swimming]', this.state.is_swimming)
    formData.append('listing[is_hiking]', this.state.is_hiking)
    formData.append('listing[is_wildlife]', this.state.is_wildlife)
    formData.append('listing[is_paddling]', this.state.is_paddling)
    
    if (this.state.photoFile) {
      formData.append('listing[photo]', this.state.photoFile);
    }
   
    this.props.submitEvent(formData)
  }
  
  letterCount() {
    let charLeft = (10 - this.state.name.length);
    return charLeft <= 0 ? '' : `${charLeft} more characters needed`;
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  
  handleInput(type){
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  numberInput(type) {
    const regex = /^[0-9\b]+$/;

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
  descriptNextStep() {
    let step = this.state.step
    let description = this.state.description

    if (description.length >= 10) {
      return (
        this.setState({
          step: this.state.step + 1
        })
      )
    } else {
      this.setState({
        step: step
      })
    }
  }

  nameNextStep() {
    let step = this.state.step
    let name = this.state.name
    if (name.length >= 10) {
      return (
        this.setState({
          step: step + 1
        })
      )
    } else {
      this.setState({
        step: step
      })
    }
  }
  
  nextStep(){
    let step = this.state.step
    return (
      this.setState({
      step: step + 1
        })
      )
  }
  

  costNextStep() {
    let step = this.state.step
    let cost = this.state.cost
    if (cost.length > 0) {
      return (
        this.setState({
          step: step + 1
        })
      )
    } else {
      this.setState({
        step: step
      })
    }
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
          nextPage = {this.nameNextStep}
          samePage ={this.sameStep}
        />
        <DescriptionForm  
          currentPage={this.state.step}
          description = {this.state.description}
          nextPage={this.descriptNextStep}
          prevPage={this.previousStep}
          handleInput={this.handleInput}
        />
        <CostForm 
          currentPage={this.state.step}
          nextPage={this.costNextStep}
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
        <PhotoForm
          currentPage={this.state.step}
          prevPage={this.previousStep}
          handlePhoto={this.handleFile}
          nextPage={this.nextStep}
          photoURL={this.state.photoUrl}
          photoFile={this.state.photoFile}
        />
        <CheckInForm
          currentPage={this.state.step}
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