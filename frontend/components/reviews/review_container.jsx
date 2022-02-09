import {connect} from 'react-redux'
import { createReview,updateReview,deleteReview } from '../../actions/listings_actions'
import ReviewForm from './review_form'
const mSTP = (state,ownProps) => {
  debugger;
  return{
  listingId: ownProps.listingId,
  listing: ownProps.listing,
}
}

const mDTP = dispatch => ({
  submitReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id=> dispatch(deleteReview(id))
})

export default connect(mSTP,mDTP)(ReviewForm)