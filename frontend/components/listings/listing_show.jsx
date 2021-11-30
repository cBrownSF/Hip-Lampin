import React from 'react'
import {ProtectedRoute} from '../../util/routes'

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }

  
  
  render() {
    if (!this.props.listing){
      return null;
    }
    return(
    <div>
      <h1>{this.props.listing.name}</h1>
      {/* <h1>Ameneties</h1>

      <p>{this.props.is_fishing}</p>
      <p>{this.props.is_shower}</p>
      <p>{this.props.is_wifi}</p>
      <p>{this.props.is_picnic_table}</p>
      <p>{this.props.is_toilet}</p>
      <p>{this.props.is_campfireAllowed_table}</p>
    </div>
    <div>
      <h1>Pricing and booking details</h1>
      <p>{this.props.cost}</p>
      <p>{this.props.cancellation_policy}</p>
      <p>{this.props.booking_time}</p>
      <p>{this.props.minimum_night}</p>
      <p>{this.props.guests_allowed}</p>
    </div> */}
  </div>
    )
  }
}

export default (ListingShow);