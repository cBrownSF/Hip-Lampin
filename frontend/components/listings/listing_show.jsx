import React from 'react'
import {ProtectedRoute} from '../../util/routes'

class ListingShow extends React.Component {
// constructor(props){
//   super(props)
//   // this.updatedProps = this.updatedProps.bind(this)
// }
  componentDidMount() {
   
    this.props.receiveListing(this.props.match.params.listingId);
  }
  componentDidUpdate() {
    
    if (!this.props.listing){
      this.props.receiveListing(this.props.match.params.listingId);
    }

  }
  onDelete(){
   this.props.deleteListing(this.props.listing.id)
  }
  
 updatedProps(word){
  return word === true ? 'Yes': 'No'
 }
 
  render() {
    if (!this.props.listing){
      return null;
    }
    const listing = this.props.listing
    return(
    <div>
      <h1>{listing.name}</h1>
      <h2>{listing.description}</h2>
      <h2>{listing.cost}</h2>
        <h2>{listing.guests_allowed}</h2>
      <h2>{listing.is_trash}</h2>
      <div>
        <h2>Ameneneties</h2>
          <p>{`trash bins: ${this.updatedProps(listing.is_trash)}`}</p>
          <p>{`showers: ${this.updatedProps(listing.is_shower)}`}</p>
          <p>{`wifi: ${this.updatedProps(listing.is_wifi)}`}</p>
          <p>{`picnic tables: ${this.updatedProps(listing.is_picnic_table)}`}</p>
      </div>
        <div><h2>Essentials</h2></div>
        <p></p>
        <p>{`Are campfires allowed: ${this.updatedProps(listing.is_campfire_allowed)}`}</p>
        <p>{`Toilets Available: ${this.updatedProps(listing.is_toilet)}`}</p>
        {console.log(listing)}
        {console.log(this.props.deleteListing)}
     
        <button onClick={()=>this.onDelete()}>button</button>
      
  </div>
    )
  }
}

export default (ListingShow);