import {connect} from 'react-redux';
import Search from './search'
import { updateFilter } from '../../actions/filter_actions';
import { receiveAllListings } from '../../actions/listings_actions'
const mapStatetoProps = (state,ownProps) => {
  return({
    allListings:ownProps.location.search,
    searchInfo: ownProps.location.state,
    listings: Object.values(state.entities.listings),
    bounds:state.ui.filters.bounds
  })
}

const mapDispatchToProps = dispatch => ({
  receiveListings: () => dispatch(receiveAllListings()),
  updateFilter: (bounds,value) => dispatch(updateFilter(bounds,value))
})
export default connect(mapStatetoProps,mapDispatchToProps)(Search)