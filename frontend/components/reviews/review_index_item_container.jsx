import { connect } from "react-redux";
import { updateReview,deleteReview } from "../../actions/listings_actions";
import ReviewIndexItem from "./review_index_item";
const mSTP = (state, ownProps) => {
  return {
    author: state.entities.users[ownProps.authorId]
  };
};
const mDTP = dispatch => {
  return{
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
  }
}
export default connect(mSTP, mDTP)(ReviewIndexItem)