import {connect} from 'react-redux';
import {createListing,removeListingErrors} from "../../actions/listings_actions";
import ListingForm from './listing_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.listing,
    currentUser: state.entities.users[state.sessions.currentUser],
    listings: state.entities.listings
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    createListing: (listing) => dispatch(createListing(listing)),
    clearErrors: () => dispatch(removeListingErrors())
  }
}
export default connect (mapStateToProps,mapDispatchtoProps)(ListingForm)