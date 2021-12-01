import React from 'react'
import {ProtectedRoute} from '../../util/routes'
import {Link} from 'react-router-dom'
class ListingShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }
  componentDidUpdate() {
    debugger;
    if (!this.props.listing){
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }
  onDelete(){
    if (this.props.currentUser.id === this.props.listing.host_id){
      this.props.deleteListing(this.props.listing.id)
    }
  }
  
 updatedProps(word){
  return word === true ? 'Yes': 'No'
 }
 
render() {
  if (!this.props.listing){
    return null;
  }
  const listing = this.props.listing
  const descript = {
    pathname: "/listings/new",
    state: { value: 2 }
  }
  return(
    <div>
      {console.log}
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
        {console.log(this.props.currentUser)}
        {console.log(this.props.listing)}
      
        <button onClick={()=>this.onDelete()}>button</button>
      {/* <Link to={`/${this.props.listing.id}/edit`}>Edit</Link> */}
        {/* <Link to={descript}>Descript</Link> */}
    </div>
  )
  }
}

export default (ListingShow);