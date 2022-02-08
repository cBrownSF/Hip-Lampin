import { connect } from 'react-redux';
import { deleteReview,updateReview } from "../../actions/listings_actions";

import React,{useState} from 'react';

class ReviewIndexItem extends React.Component{
 constructor(props){
  super(props)
  console.log(props)
  this.state={...this.props.review}
  this.helpfulFunc=this.helpfulFunc.bind(this)
 }
 
 helpfulFunc(){
   if (this.state.helpful_authors.includes(this.props.author.id) && this.state.helpful_authors.length ===1) {
     let emptyArray = []
    return this.setState({
       helpful_authors: emptyArray,
      helpful: this.state.helpful - 1,
     }, () => {
       debugger
       this.props.updateReview(this.state)
     })
    }else if (this.state.helpful_authors.includes(this.props.author.id)){
     let arrDoub = [...this.state.helpful_authors]
     let index=arrDoub.indexOf(this.props.author.id)
     arrDoub.splice(index,1)
    return this.setState({
       helpful: this.state.helpful - 1,
       helpful_authors: arrDoub,
       helped:false
    }, () => {
      debugger
      this.props.updateReview(this.state)
   })
   }else{
   return this.setState({
     helpful: this.state.helpful + 1,
     helpful_authors: [...this.state.helpful_authors, this.props.author.id],
     helped: true
   }, () => {
     this.props.updateReview(this.state)
   }
   
   )
  }
 }
  render(){
    const { title, description, recommends, id } = this.props.review;
    const { lname, fname,authorId } = this.props.author
    const currentUser=this.props.currentUser
  return (
    <div>
      <div className="button-review-div">
        {
          currentUser && currentUser.id === this.props.author.id ? (
            <div className="Delete-review-button-div">
              <button className="Delete-review-button" onClick={
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
          currentUser && currentUser.id === this.props.author.id ? (<button onClick={()=>{
            this.helpfulFunc()
          }
          }>
            Works. Use this for "allowing Helpful"
          </button>
          ) : ('')
        }
      </div>
      
      <div>
        <div>
          <div>
          {this.state.recommends? (
            <h1><p className="name-initial-review">{`${fname} ${lname[0]}.`}</p> recommends this listing</h1>
          ):(
              <h1><p className="name-initial-review">{`${fname} ${lname[0]}.`}</p> does not recommend this listing</h1>
          )}
          </div>
          <div>
            <p>{title}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
          <button 
          onClick={() => this.helpfulFunc()}
          className={this.state.helped?"greyed-out-button":"green-helpful-button"}>
          Helpful {this.state.helpful}
          </button>
          </div>
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