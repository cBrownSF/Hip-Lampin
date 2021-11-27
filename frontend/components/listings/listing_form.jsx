import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"
import NameForm from './naming_form'
import DescriptionForm from './description_form'
import CostForm from './cost'
import Amenities from "./amenenities_checklist";
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      name: "",
      description: "",
      cost: '',
      checkInTime: "",
      checkOutTime: "",
      responseTime: '',
      onArrival: '',
      guestsAllowed: '',
      minimumNight: '',
      cancellationPolicy: '',
      bookingTime: '',
      isTrash: false,
      isKitchen: false,
      isShower: false,
      isWifi: false,
      isPicnicTable:false,
      isToilet: false,
      isCampfireAllowed: false,
    }
    this.handleInput=this.handleInput.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.notToggle = this.notToggle.bind(this)
    this.toggleBoolean = this.toggleBoolean.bind(this)
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
  notToggle(type){
    return e =>{
      this.setState({[type]: false })
    }
  }
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
      <form>
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
        handleInput={this.handleInput}
        isTrash = {this.state.isTrash}
        toggleCheck = {this.toggleBoolean}
        notToggle = {this.notToggle}
        diffToggle = {this.diffToggleBool}
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