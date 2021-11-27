import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"
import NamingForm from './naming_form'
import DescriptionForm from './description_form'
import CostForm from './cost'
class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      name: "",
      description: "",
      cost: '',
    };
    this.handleSubmit.bind(this)
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
    nextFormStep(currentStep){
     return this.setState({
      [currentStep]: currentStep +1
      })
    }
    previousFormStep(currentStep) {

    return this.setState({
      [currentStep]: currentStep -1
    })
  }
  render() {
  switch (this.state.currentStep) {
    case 1:
      <NamingForm 
        nextPage={this.nextFormStep}
        prevPage ={this.previousFormStep}
        handleInput ={this.handleInput}
        name = {this.state.name}
      />
    case 2:
      <DescriptionForm  
        nextPage={this.nextFormStep}
        prevPage={this.previousFormStep}
        handleInput={this.handleInput}
        description = {this.state.description}
      />

    case 3:
      <CostForm 
        nextPage={this.nextFormStep}
        prevPage={this.previousFormStep}
        handleInput={this.handleInput}
        cost = {this.state.cost}
      />
    default:
      return(
        <NamingForm
          nextPage={this.nextFormStep}
          prevPage={this.previousFormStep}
          handleInput={this.handleInput}
          name={this.state.name}
        />
      )
      }
  }
}

export default ListingForm