import {connect} from 'react-redux';
import Search from './search'
import { receiveAllListings } from '../../actions/listings_actions'
const mapStatetoProps = state => {
  debugger;
  console.log('hello')
  return({
   
    listings: Object.values(state.entities.listings)
  })
}

const mapDispatchToProps = dispatch => ({
  receiveListings: () => dispatch(receiveAllListings())
})
export default connect(mapStatetoProps,mapDispatchToProps)(Search)