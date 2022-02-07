import { connect } from 'react-redux';
import { deleteReview,updateReview } from "../../actions/listings_actions";

import React from 'react';

const ReviewIndexItem = ({ author,review,helpfulFunc,currentUser,deleteReview}) => {
  debugger;
  const { title, description,recommends,id } = review;
  const {lname,fname}= author
  
  return (
    <div>
      <div>
        {
          currentUser && currentUser.id === author.id ? (
            <div >
              <button onClick={
                () => deleteReview(id)
              }>
                Delete Review
              </button>
            </div>
          ) : (
            ""
          )}
      </div>
      {/* {currentUser.id===id? <Link to ={createUpdateContainer}><button>Edit</button></Link> : ''} */}
      <div>
        <div>
          <h1>{`${fname} ${lname[0]}. recommends this listing`}</h1>
          <p>{title}</p>
          <p>{description}</p>
          <button onClick={helpfulFunc}>Helpful</button>
        </div>
      {/* ) :( */}
        <div>
          <h1>{`${fname} ${lname[0]}. does not recommend this listing`}</h1>
          <p>{title}</p>
          <p>{description}</p>
            <button onClick={helpfulFunc}>Helpful</button>
        </div>
      {/* )} */}
    </div >
    </div>
  )
};
// export default ReviewIndexItem;



const mSTP = (state,ownProps) => {
  debugger;
  return {
    author: state.entities.users[ownProps.authorId]
  };
};
const mDTP = dispatch => ({
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
})
export default connect (mSTP,mDTP)(ReviewIndexItem)