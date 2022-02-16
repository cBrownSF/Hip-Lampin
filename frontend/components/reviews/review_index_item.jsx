import { connect } from 'react-redux';
import { deleteReview,updateReview } from "../../actions/listings_actions";
// import "./review_ind_item.css"
import React from 'react';

class ReviewIndexItem extends React.Component{
 constructor(props){
  super(props)
  // console.log(this.props.review.helpful_authors)
  this.state={...this.props.review}
  this.helpfulFunc=this.helpfulFunc.bind(this)
  this.getTime=this.getTime.bind(this)
 }
 componentDidMount(){
   if(this.state.recommends){ 
     this.props.count()
   }
  
   let helpedArray=[...this.state.helpful_authors]
   helpedArray.filter(Number)
   console.log(helpedArray.filter(Number))
   return this.setState({
    helpful_authors:helpedArray
   })
   
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
 
   if (!this.props.currentUser){
     this.props.openModal('login')
   }
   if (this.state.helpful_authors.includes(this.props.currentUser.id) && this.state.helpful_authors.length ===1) {
     let arrDoub = ['']
    return this.setState({
       helpful_authors: arrDoub,
      helpful: this.state.helpful - 1,
      helped:false
     }, () => {
     
       this.props.updateReview(this.state)
     })
    }
    if (this.state.helpful_authors.includes(this.props.currentUser.id)){
     let arrDoub = [...this.state.helpful_authors]
     console.log(arrDoub)
     let index=arrDoub.indexOf(this.props.currentUser.id) 
     arrDoub.splice(index,1)
    
    return this.setState({
       helpful: this.state.helpful - 1,
       helpful_authors: arrDoub,
       helped:false
    }, () => {
    
        this.props.updateReview(this.state)
    
     
   })
   }else{
   return this.setState({
     helpful: this.state.helpful + 1,
     helpful_authors: [...this.state.helpful_authors, this.props.currentUser.id],
     helped: true
   }, () => {
       this.props.updateReview(this.state)
  })
 }
}
  render(){
    const { title, description, recommends, id } = this.props.review;
    const { lname, fname,authorId } = this.props.author
    const {helpful_authors,helped}=this.state
    const currentUser=this.props.currentUser
  return (
    <div className="review-index-item">
      <div className="button-and-title">
      <div className="title-review-div" >
        <p className="title-review">{title}</p>
      </div>
      <div className="button-review-div">
        {
          currentUser && currentUser.id === this.props.author.id ? (
            <div className="delete-review-button-div">
              <button className="delete-review-button" onClick={
                this.state.recommends ? (

                    () => this.props.deleteReview(id).then(this.props.subCount())
                  ) : () => this.props.deleteReview(id)
              }>
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
      </div>
      </div>
        <div className="review-title-body-div">
          {/* <div className="title-review-div" >
            <p className="title-review">{title}</p>
          </div> */}
          <div className="review-recommends-div">
          {this.state.recommends? (
            <div className='div-for-recommends'>
              {!currentUser  || currentUser.id !== this.props.author.id ? (
                <div className="div-inside-recommend-condition">
              <p className="name-initial-review">{`${fname} ${lname[0]}. `}</p>
              <p className='recommends-review'> recommends this listing</p>
              </div>) : (
                  <div className="div-inside-recommend-condition">
                    <p className="name-initial-review">{`You `}</p>
                    <p className='recommends-review'> recommend this listing</p>
                  </div>
              )}
              <p className='review-time'>{this.getTime()}</p>
            </div>
          ):(
            
              <div className='div-for-recommends'>
                {currentUser && currentUser.id === this.props.author.id ? (
                  <div className="div-inside-recommend-condition">
                    <p className="name-initial-review">{`You `}</p>
                    <p className='recommends-review'> do not recommend this listing</p>
                  </div>
                  ) : (
                  <div className="div-inside-recommend-condition">
                    <p className="name-initial-review">{`${fname} ${lname[0]}. `}</p>
                    <p className='recommends-review'> does not recommend this listing</p>
                  </div>
                )}
                <p className='review-time'>{this.getTime()}</p>
              </div>
            )}
          </div>
          <div className='review-body-div'>
            <p className='review-body'>{description}</p>
          </div>
          <div className="button-helpful-div">
          {!currentUser || currentUser.id !== this.props.author.id ?(
            <button 
            onClick={() => this.helpfulFunc()}
              className={helped && helpful_authors.includes(currentUser.id) ?"greyed-out-button":"green-helpful-button"}>
            <span className="thumbs-up"><i className="far fa-thumbs-up"></i></span>
            <span className='helpful-word'>Helpful</span>
            <span className="number-of-votes">{this.state.helpful}</span>
            </button>
          ):''}
          </div>
        </div>
      <div className="review-line-break">
        <hr className="review-break" />
      </div>
    </div>
  )
  }
}

export default ReviewIndexItem;

