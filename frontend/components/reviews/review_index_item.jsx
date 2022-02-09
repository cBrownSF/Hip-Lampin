import { connect } from 'react-redux';
import { deleteReview,updateReview } from "../../actions/listings_actions";
// import "./review_ind_item.css"
import React from 'react';

class ReviewIndexItem extends React.Component{
 constructor(props){
  super(props)
  this.state={...this.props.review}
  this.helpfulFunc=this.helpfulFunc.bind(this)
  this.getTime=this.getTime.bind(this)
 }
 getTime(){
   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   let d = new Date(this.state.created_at)
   let monthName= months[d.getMonth()]
   let day = d.getDate()
   let year = d.getFullYear()
  return `${monthName} ${day}, ${year}`

 }
 helpfulFunc(){
   if (this.state.helpful_authors.includes(this.props.author.id) && this.state.helpful_authors.length ===1) {
     let emptyArray = []
    return this.setState({
       helpful_authors: emptyArray,
      helpful: this.state.helpful - 1,
      helped:false
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
    <div className="review-index-item">
      <div className="button-review-div">
        {
          currentUser && currentUser.id === this.props.author.id ? (
            <div className="delete-review-button-div">
              <button className="delete-review-button" onClick={
                () => this.props.deleteReview(id)
              }>
                Delete Review
              </button>
            </div>
          ) : (
            ""
          )}
      </div>
      <div className='helpful-extra-css'>
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
        <div className="review-title-body-div">
          <div className="title-review-div" >
            <p className="title-review">{title}</p>
          </div>
          <div className="review-recommends-div">
          {this.state.recommends? (
            <div className='div-for-recommends'>
            <p className="name-initial-review">{`${fname} ${lname[0]}.`}</p>
            <p className='recommends-review'> recommends this listing</p>
            <p className='review-time'>{this.getTime()}</p>
            </div>
          ):(
              <div className='div-for-recommends'>
                <p className="name-initial-review">{`${fname} ${lname[0]}.`}</p>
                <p className='recommends-review'> does not recommend this listing</p>
                <p className='review-time'>{this.getTime()}</p>
              </div>
            )}
          </div>
          <div className='review-body-div'>
            <p className='review-body'>{description}</p>
          </div>
          <div className="button-helpful-div">
            <button 
            onClick={() => this.helpfulFunc()}
            className={this.state.helped?"greyed-out-button":"green-helpful-button"}>
            <span className="thumbs-up"><i className="far fa-thumbs-up"></i></span>
            <span className='helpful-word'>Helpful</span>
            <span className="number-of-votes">{this.state.helpful}</span>
            </button>
          </div>
        </div>
    </div>
  )
  }
}

export default ReviewIndexItem;

