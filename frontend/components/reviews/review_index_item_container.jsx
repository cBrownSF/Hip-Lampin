import { connect } from 'react-redux';
import { deleteReview,updateReview } from "../../actions/listings_actions";

import React,{useState} from 'react';

class ReviewIndexItem extends React.Component{
 constructor(props){
  super(props)
  this.state={...this.props.review}
 }
 
  render(){
    const { title, description, recommends, id } = this.props.review;
    const { lname, fname,authorId } = this.props.author
    const currentUser=this.props.currentUser
  return (
    <div>
      <div>
        {
          currentUser && currentUser.id === this.props.author.id ? (
            <div >
              <button onClick={
                () => this.props.deleteReview(id)
              }>
                Delete Review
              </button>
            </div>
          ) : (
            ""
          )}
      </div>
      <button onClick={
        
        () => console.log(this.props.author)
      }>
        Test button
      </button>
      {/* {currentUser.id===id? <Link to ={createUpdateContainer}><button>Edit</button></Link> : ''} */}
      <div>
        <div>
          <h1>{`${fname} ${lname[0]}. recommends this listing`}</h1>
          <p>{title}</p>
          <p>{description}</p>
          <button onClick={() => {
            
            this.setState({ helpful: this.state.helpful + 1 },()=>{
              console.log(this.props.author.id)
              console.log(this.props.updateReview)
              this.props.updateReview(this.state)
            })
          }}>
            Helpful
          </button>
          {/* <button onClick={helpfulFunc}>Helpful</button> */}
        </div>
      {/* ) :( */}
        <div>
          <h1>{`${fname} ${lname[0]}. does not recommend this listing`}</h1>
          <p>{title}</p>
          <p>{description}</p>
            {/* <button onClick={helpfulFunc}>Helpful</button> */}
        </div>
      {/* )} */}
    </div >
    </div>
  )
}
}
;
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