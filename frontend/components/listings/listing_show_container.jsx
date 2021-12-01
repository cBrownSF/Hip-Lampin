import { receiveListing,deleteListing } from "../../actions/listings_actions"
import { connect } from "react-redux"
import ListingShow from './listing_show'
const mapStateToProps = (state, ownProps) => {
  return{
    listing: state.entities.listings[ownProps.match.params.listingId]
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListing: id => dispatch(receiveListing(id)),
  deleteListing: (id) =>dispatch(deleteListing(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow)