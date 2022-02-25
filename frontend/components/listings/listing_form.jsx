import React from "react";
import { Link, withRouter } from "react-router-dom";
import { hashHistory } from "react-router"
import NameForm from './naming_form'
import DescriptionForm from './description_form'
import CostForm from './cost'
import SiteDetails from "./site_details";
import Amenities from "./amenenities_checklist";
import Activities from "./activities";
import CheckInForm from "./check_in_form";
import PhotoForm from "./photos";
import LocationForm from "./location"
import MiniMap from "./minimap";
class ListingForm extends React.Component {
  constructor(props) {
    super(props)

    if (!this.props.listing && this.props.formType === 'edit') {
      hashHistory.push(`listings/${props.match.params.listingId}`)
      return undefined;
    }
    const listing = this.props.listing
    this.state = {
      step: this.props.location.state || 1,
      host_id: this.props.currentUser.id,
      name: listing.name || "",
      description: listing.description || "",
      cost: listing.cost || '',
      state: listing.state || '',
      country: listing.country || '',
      street_address: listing.street_address || '',
      city: listing.city || '',
      zip_code: listing.zip_code || '',
      check_in_time: listing.check_in_time || "02:00 PM",
      check_out_time: listing.check_out_time || "12:00 PM",
      response_time: listing.response_time || '10 minutes',
      on_arrival: listing.on_arrival || 'Meet and Greet',
      guests_allowed: listing.guests_allowed || 1,
      minimum_night: listing.minimum_night || 1,
      lat: listing.lat || '',
      lng: listing.lng || '',
      cancellation_policy: listing.cancellation_policy || 'Flexible',
      booking_time: listing.booking_time || '12 months in advance',
      is_trash: listing.is_trash || false,
      is_kitchen: listing.is_kitchen || false,
      is_shower: listing.is_shower || false,
      is_wifi: listing.is_wifi || false,
      is_picnic_table: listing.is_picnic_table || false,
      is_toilet: listing.is_toilet || false,
      is_campfire_allowed: listing.is_campfire_allowed || false,
      is_fishing: listing.is_fishing || false,
      is_swimming: listing.is_swimming || false,
      is_hiking: listing.is_hiking || false,
      is_paddling: listing.is_paddling || false,
      is_wildlife: listing.is_wildlife || false,
      photoFile: listing.photos || [],
      photoURL: listing.photos || [],

    }
   
    this.autoComplete = null;
    this.error = false;
    this.locNextStep = this.locNextStep.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.toggleBoolean = this.toggleBoolean.bind(this)
    this.numberInput = this.numberInput.bind(this)
    this.descriptNextStep = this.descriptNextStep.bind(this)
    this.letterCount = this.letterCount.bind(this)
    this.costNextStep = this.costNextStep.bind(this)
    this.nameNextStep = this.nameNextStep.bind(this)
    this.hideButton = this.hideButton.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.nextStepPhoto = this.nextStepPhoto.bind(this)
    this.handleFileChange=this.handleFileChange.bind(this)
    // this.handleMultiplFiles=this.handleMultiplFiles.bind(this)
    // this.extractAddressInfo=this.extractAddressInfo.bind(this)
    this.autoCompleteNextStep = this.autoCompleteNextStep.bind(this)
    
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
    formData.append('listing[lat]', this.state.lat)
    formData.append('listing[lng]', this.state.lng)
    formData.append('listing[street_address]', this.state.street_address)
    formData.append('listing[city]', this.state.city)
    formData.append('listing[state]', this.state.state)
    formData.append('listing[zip_code]', this.state.zip_code)
    formData.append('listing[country]', this.state.country)
    if (this.state.photoFile) {
      // formData.append("listing[photos][]", this.state.photoFile[i]);
    
      // formData.delete("listing[photos][]")
      for (let i = 0; i < 3; i++) {
        // this.props.listing.slice(0,2)
        if (this.state.photoFile[i] instanceof File){
          formData.append("listing[photos][]", this.state.photoFile[i]);
        }
        }
      // 
    }
    
    this.props.submitEvent(formData)

    // this.props.history.push(`/listing/${this.props.listing.id}`)
  }

  letterCount() {
    let charLeft = (10 - this.state.name.length);
    return charLeft <= 0 ? '' : `${charLeft} more characters needed`;
  }

  handleFileChange(url,file) {
 
    return (
      this.setState({
        photoURL:url,
        photoFile:file
    })
    )
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  numberInput(type) {
    const regex = /^[0-9\b]+$/;

    return e => {
      if (e.currentTarget.value === '' || regex.test(e.currentTarget.value)) {
        this.setState({ [type]: e.currentTarget.value })
      }
    }
  }
  handleKeyDown(e) {

    if (e.key === "Enter") {
      e.preventDefault()
      this.setState({
        step: this.state.step
      })
    }
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {

      if (this.state.cost.length > 0) {

        this.setState({
          step: this.state.step + 1
        })
      } else {
        this.setState({
          step: 3
        })
      }
    }
  }


  toggleBoolean(type) {
    return e => {
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
      return (
        this.setState({
          step: step
        })
      )
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
      return (
        this.setState({
          step: step
        })
      )
    }
  }

  nextStep(e) {
    e.preventDefault()
    let step = this.state.step
    let formType=this.props.formType
    if (step === 8 && formType === 'edit') {

      return (
        this.setState({
          step: step + 2
        })
      )
  }else{
    return (
      this.setState({
        step: step + 1
      })
    )
    }
  }
  nextStepPhoto(e) {
  
    e.preventDefault()
    let step = this.state.step
    if (this.state.photoFile.length>=3){
    return (
      this.setState({
        step: step + 1
      })
    )
  }
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
  previousStep(e) {
    e.preventDefault()
    let step = this.state.step
    let formType = this.props.formType
    if (step === 10 && formType === 'edit') {
  
      return (
        this.setState({
          step: step - 2
        })
      )}else{
    return this.setState({
      step: step - 1
    })
  }
  }
  autoCompleteNextStep() {
    const options = {
      componentRestrictions: { country: ["us"] },
      fields: ["address_components", "geometry", "formatted_address", "type", "adr_address", "name"],
      types: ["address"],
    }
    let textInput = document.getElementById("autocomplete")
    this.autoComplete = new google.maps.places.Autocomplete(textInput, options)
    let auto = this.autoComplete;
    this.autoComplete.addListener('place_changed', () => {
      let address = auto.getPlace()
      for (const section of address.address_components) {
        const addressType = section.types[0];
        switch (addressType) {
          case "postal_code":
            this.setState({
              zip_code: section.long_name
            })
            break;
          case "locality":
            this.setState({
              city: section.long_name
            })
          case "administrative_area_level_1": {

            this.setState({
              state: section.short_name
            })
            break;
          }
          default:
            break;
        }

      }
      let splitFormat = address.formatted_address.split(',')
      let streetA = splitFormat[0]

      this.setState({
        lat: address.geometry.location.lat(),
        lng: address.geometry.location.lng(),
        street_address: streetA,
        step: 8
      })
    })

  }

  locNextStep() {

    if (!this.state.city.length && !this.state.street_address.length) {
  
      return this.setState(
        {
          step: this.state.step
        })
    } else {
      return this.setState(
        {
          step: this.state.step + 1
        })
    }
  }

  hideButton() {

    if (this.props.formType === 'edit') {
      return (
        //has to be a button not a link
        <Link className='x-button' onClick={this.handleSubmit}>✖</Link>
      )
      //`/listings/${this.props.listing.id}`
      //  onClick = { this.handleSubmit }
    } else {
      return <span className='x-button'></span>
    }
  }
  render() {
    if (this.props.listing === undefined) {
      return null;
    }
    return (
      <div className='background-of-form'>
        <React.Fragment>
          <form onSubmit={this.handleSubmit} className='create-listing-form'>
            <p className='hide-button'>{this.hideButton()}</p>
            <NameForm
              currentPage={this.state.step}
              name={this.state.name}
              handleInput={this.handleInput}
              nextPage={this.nameNextStep}
              samePage={this.sameStep}
            />
            <DescriptionForm
              currentPage={this.state.step}
              description={this.state.description}
              nextPage={this.descriptNextStep}
              prevPage={this.previousStep}
              handleInput={this.handleInput}
              formType={this.props.formType}
            />
            <CostForm
              currentPage={this.state.step}
              nextPage={this.costNextStep}
              prevPage={this.previousStep}
              handleNumInput={this.numberInput}
              cost={this.state.cost}
              minNight={this.state.minimum_night}
              maxGuest={this.state.guests_allowed}
              handleInput={this.handleInput}
              listing={this.props.listing}
              keyPress={this.handleKeyPress}
            />
            <Amenities
              currentPage={this.state.step}
              nextPage={this.nextStep}
              prevPage={this.previousStep}
              toggleCheck={this.toggleBoolean}
              trash={this.state.is_trash}
              kitchen={this.state.is_kitchen}
              wifi={this.state.is_wifi}
              picnic={this.state.is_picnic_table}
              shower={this.state.is_shower}
              toilet={this.state.is_toilet}
              campfire={this.state.is_campfire_allowed}
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
              fishing={this.state.is_fishing}
              paddling={this.state.is_paddling}
              wildlife={this.state.is_wildlife}
              swimming={this.state.is_swimming}
              hiking={this.state.is_hiking}
            />
            <LocationForm
              currentPage={this.state.step}
              nextPage={this.locNextStep}
              formType={this.props.formType}
              prevPage={this.previousStep}
              handleInput={this.handleInput}
              city={this.state.city}
              country={this.state.country}
              address={this.state.street_address}
              state={this.state.state}
              zip={this.state.zip_code}
              auto={this.autoCompleteNextStep}
              keyDown={this.handleKeyDown}
            />
            <MiniMap
              currentPage={this.state.step}
              prevPage={this.previousStep}
              lat={this.state.lat}
              lng={this.state.lng}
              city={this.state.city}
              country={this.state.country}
              address={this.state.street_address}
              state={this.state.state}
              zip={this.state.zip_code}
              nextPage={this.nextStep}
            />
            <PhotoForm
              currentPage={this.state.step}
              prevPage={this.previousStep}
              handleFileChange={this.handleFileChange}
              nextPage={this.nextStepPhoto}
              photoURL={this.state.photoURL}
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
              photoFile={this.state.photoFile}
            />
          </form>
        </React.Fragment>
      </div>
    )

  }
}


export default withRouter(ListingForm)