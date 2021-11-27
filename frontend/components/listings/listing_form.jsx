import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"
import NameForm from './naming_form'
import DescriptionForm from './description_form'
import CostForm from './cost'
import useState from 'react'
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      name: "",
      description: "",
      cost: '',
    }
    this.handleInput=this.handleInput.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.nextButton = this.nextButton.bind(this)
    // this.handleSubmit=this.handleSubmit.bind(this)
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

    nextButton(){
      let currentStep = this.state.step
      if (currentStep ===1){
        return(
          <button type = 'button' onClick={this.nextStep}>Next</button>
        )
      }
    }
    previousButton(){
      <button onClick = {this.previousStep}>Previous</button>
    }
  render() {
    
      return (
      <React.Fragment>
        <form>
      <NameForm 
        currentStep = {this.state.step}
        name = {this.state.name}
        handleInput ={this.handleInput}
        nextPage = {this.nextStep}
      />
      <DescriptionForm  
        currentStep={this.state.step}
        nextPage={this.nextStep}
        prevPage={this.previousStep}
        handleInput={this.handleInput}
        description = {this.state.description}
      />
      <CostForm 
        currentStep={this.state.step}
        nextPage={this.nextStep}
        prevPage={this.previousStep}
        handleInput={this.handleInput}
        cost = {this.state.cost}
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