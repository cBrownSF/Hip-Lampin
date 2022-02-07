import { connect } from 'react-redux';
import { deleteReview,updateReview } from "../../actions/listings_actions";

import React,{useState} from 'react';

class ReviewIndexItem extends React.Component{
 constructor(props){
  super(props)
  console.log(props)
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
      <div>
        {
          currentUser && currentUser.id !== this.props.author.id ? (<button onClick={
            
            () => console.log(this.props.author)
          }>
            Works. Use this for "allowing Helpful"
          </button>
          ) : ('')
        }
      </div>
      
      <div>
        <div>
          {this.state.recommends? (
          <h1>{`${fname} ${lname[0]}. recommends this listing`}</h1>
          ):(
              <h1>{`${fname} ${lname[0]}. does not recommend this listing`}</h1>
          )}
          <p>{title}</p>
          <p>{description}</p>
          <button onClick={() => {
            let newArray = this.props.review.helpful_authors.concat(this.props.author.id)
            console.log(newArray)
            console.log(this.state)
            this.setState({ 
              helpful: this.state.helpful + 1, 
             helpful_authors: [...this.state.helpful_authors,this.props.author.id]
            },()=>{
              debugger
              this.props.updateReview(this.state)
            })
          }}>
            Helpful{this.state.helpful}
          </button>
        </div>


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