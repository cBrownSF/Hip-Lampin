import {connect} from 'react-redux';
import Search from './search'
import { updateBounds } from '../../actions/filter_actions';
import { receiveAllListings } from '../../actions/listings_actions'
const mapStatetoProps = state => {
 
  console.log('hello')
  return({
   
    listings: Object.values(state.entities.listings)
  })
}

const mapDispatchToProps = dispatch => ({
  receiveListings: () => dispatch(receiveAllListings()),
  updateBounds: (bounds)=>dispatch(updateBounds(bounds))
})
export default connect(mapStatetoProps,mapDispatchToProps)(Search)