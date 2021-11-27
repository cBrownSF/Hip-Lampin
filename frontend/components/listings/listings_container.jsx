import { receiveAllListings } from "../../actions/listings_actions"
import { connect } from "react-redux";
import Listing from "./listings"

const mapStatetoProps = state => {
  return{
  errors: state.errors.listing,
  listings: state.entities.listings
  }
}

const mapDispatchtoProps = dispatch =>{
  return{
  receiveListings: (listings) => dispatch(receiveAllListings(listings))
  };
  
}

  export default connect(mapStatetoProps,mapDispatchtoProps)(Listing)