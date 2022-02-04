import {connect} from 'react-redux'
import { createReview } from '../../actions/listings_actions'
import ReviewForm from './review_form'
debugger;
const mSTP = (state,ownProps) => {
  debugger;
  return{
  listingId: ownProps.listingId,
  listing: ownProps.listing,
}
}

const mDTP = dispatch => ({
  submitReview: review => dispatch(createReview(review))
})

export default connect(mSTP,mDTP)(ReviewForm)