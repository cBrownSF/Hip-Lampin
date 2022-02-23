import {connect} from 'react-redux';
import Search from './search'
import { updateFilter } from '../../actions/filter_actions';
import { receiveAllListings } from '../../actions/listings_actions'
import { clearListings } from '../../actions/filter_actions';
const mapStatetoProps = (state,ownProps) => {
  return({
    allListings:ownProps.location.search,
    searchInfo: ownProps.location.state,
    listings: Object.values(state.entities.listings),
    total:state.ui.filters.total
  })
}

const mapDispatchToProps = dispatch => ({
  receiveListings: () => dispatch(receiveAllListings()),
  updateFilter: (bounds,value) => dispatch(updateFilter(bounds,value)),
  clearListings: () => dispatch(clearListings())
})
export default connect(mapStatetoProps,mapDispatchToProps)(Search)