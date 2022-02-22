import {connect} from 'react-redux'
import { createReview,updateReview,deleteReview } from '../../actions/listings_actions'
import { removeReviewErrors } from '../../actions/listings_actions'
import ReviewForm from './review_form'
const mSTP = (state,ownProps) => {
  return{
  listingId: ownProps.listingId,
  listing: ownProps.listing,
  errors: state.errors.review,

}
}

const mDTP = dispatch => ({
  submitReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id=> dispatch(deleteReview(id)),
  clearErrors: () => dispatch(removeReviewErrors()),

})

export default connect(mSTP,mDTP)(ReviewForm)