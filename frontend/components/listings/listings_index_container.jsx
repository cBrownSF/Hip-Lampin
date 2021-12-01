import {connect} from 'react-redux'
import ListingIndex from './listings_index'
import { receiveAllListings } from '../../actions/listings_actions'

const mapStateToProps = state =>{
  return{
  listings: state.entities.listings
  // alllisting: Object.values(state.listings)
  }
}

const mapDispatchToProps = dispatch =>({
receiveListings: ()=>dispatch(receiveAllListings())
})

export default connect(mapStateToProps,mapDispatchToProps)(ListingIndex)
