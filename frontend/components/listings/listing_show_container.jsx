import { receiveListing,deleteListing } from "../../actions/listings_actions"
// import {selectReviewsForListing} from "../../reducers/selectors"
import { connect } from "react-redux"
import ListingShow from './listing_show'
const mapStateToProps = (state, ownProps) => {

  const listingId = Number(ownProps.match.params.listingId)
  // const listing = state.entities.listings[listingId]
  // const reviews =  selectReviewsForListing(state.entities,listing)
debugger;
  return{
    currentUser: state.entities.users[state.sessions.currentUser],
    listing: state.entities.listings[ownProps.match.params.listingId],
    listingId:listingId,
    reviews: Object.values(state.entities.reviews),
    authors: Object.values(state.entities.users)
    
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListing: id => dispatch(receiveListing(id)),
  deleteListing: (id) =>dispatch(deleteListing(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow)