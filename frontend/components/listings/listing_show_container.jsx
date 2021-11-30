import { receiveListing } from "../../actions/listings_actions"
import { connect } from "react-redux"
import Listing from './listing_show'
const mapStateToProps = (state, ownProps) => {
  return{
    listing: state.entities.listings[ownProps.match.params.listingId]
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListing: id => dispatch(receiveListing(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Listing)