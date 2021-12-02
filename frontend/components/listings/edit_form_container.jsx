import ListingForm from './listing_form';
import { connect } from "react-redux"
import { deleteListing, updateListing,removeListingErrors,receiveListing} from "../../actions/listings_actions";
const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.listing,
    currentUser: state.entities.users[state.sessions.currentUser],

    listing: state.entities.listings[ownProps.match.params.listingId]
  }
}

const mapDispatchToProps = dispatch => ({
  submitEvent: id => dispatch(updateListing(id)),
  deleteListing: (id) => dispatch(deleteListing(id)),
  clearErrors: () => dispatch(removeListingErrors()),
  receiveListing: id => dispatch(receiveListing(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)