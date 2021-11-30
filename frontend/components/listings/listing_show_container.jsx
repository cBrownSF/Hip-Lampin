import { receiveListing } from "../../actions/listings_actions"
import { connect } from "react-redux"
import ListingShow from './listing_show'
import { selectBench } from "../../reducers/selectors"
const mapStateToProps = (state, ownProps) => {
  return{
    listing: state.entities.listings[ownProps.match.params.listingId]
  }
}

const mapDispatchToProps = dispatch => ({
  receiveListing: id => dispatch(receiveListing(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow)