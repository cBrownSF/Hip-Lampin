import {connect} from 'react-redux';
import {createListing,removeListingErrors} from "../../actions/listings_actions";
import ListingForm from './listing_form';
import { withRouter } from 'react-router';
const mapStateToProps = (state) => {
  return {
    errors: state.errors.listing,
    currentUser: state.entities.users[state.sessions.currentUser],
    listing: '',
    formType: 'create'
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    submitEvent: (listing) => dispatch(createListing(listing)),
    clearErrors: () => dispatch(removeListingErrors())
  }
}
export default withRouter(connect (mapStateToProps,mapDispatchtoProps)(ListingForm))