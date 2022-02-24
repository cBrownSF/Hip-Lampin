import { receiveListing,deleteListing} from "../../actions/listings_actions"
import { clearReviews } from "../../actions/filter_actions"
import { receiveOneUser } from "../../actions/user_actions"
import { connect } from "react-redux"
import { openModal } from "../../actions/modal_actions"
import ListingShow from './listing_show'
const mapStateToProps = (state, ownProps) => {
  // const listing = state.entities.listings[listingId]
  // const reviews =  selectReviewsForListing(state.entities,listing)
  return{
    currentUser: state.entities.users[state.sessions.currentUser],
    listing: state.entities.listings[ownProps.match.params.listingId],
    reviews: Object.values(state.entities.reviews),
    authors: Object.values(state.entities.users)
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListing: id => dispatch(receiveListing(id)),
  deleteListing: (id) =>dispatch(deleteListing(id)),
  openModal: modal => dispatch(openModal(modal)),
  receiveUser: (user) => dispatch(receiveOneUser(user)),
  clearReviews: () => dispatch(clearReviews())})

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow)