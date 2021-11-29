import { receiveListing } from "../../actions/listings_actions"
import { connect } from "react-redux"
import ListingShow from './listing_show'
const mapStateToProps = (state, ownProps) => ({
  listing: state.listings[ownProps.match.params.listingId]
})

const mapDispatchToProps = (dispatch) => ({
  requestListing: (listingId) => dispatch(receiveListing(listingId))
})

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow)