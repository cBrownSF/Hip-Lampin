import React from 'react'
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      helpful: 0,
      recommends: null,
      helpful_authors:[],
      helped:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numberInput = this.numberInput.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    const listing_id =this.props.listingId 
    const review = Object.assign({}, this.state, {
      listing_id,
    });  
    this.props
      .submitReview(review)
      .then(
        this.setState({
          title: '',
          description: '',
          helpful: 0,
          recommends: false,
        })
      )
  }
  update(field) {

    return (e) => this.setState({ [field]: e.currentTarget.value });
    
  }

  numberInput(type) {
    const regex = /^[1-5\b]+$/;

    return e => {
      
      if (e.currentTarget.value === '' || regex.test(e.currentTarget.value) && e.currentTarget.value.length <= 1) {
        this.setState({ [type]: e.currentTarget.value })
      }
    }
  } 
  render() { 
    return (  
  
      <div className="review-form-div">
        <form className="review-form-form" onSubmit={this.handleSubmit}>
          <div className='add-review'>
            Add your own 
          </div >
          <div className='review-prompt'> Add a title</div>
          <input className='review-title-input' type="text" 
            value={this.state.title}
            onChange={this.update("title")}
            placeholder=" Enter Title"
          />
          <div className='review-prompt'> How was your stay?</div>
          <textarea 
            value={this.state.description}
            onChange={this.update("description")}
            placeholder=" Enter the details"
            className='review-body-input'
          />
          <div>
            <label className='select-prompt'>Do you recommend this listing?  </label>
          <select className="select-menu" value={this.state.recommends} onChange={this.update('recommends')}>
           <option value ={null}>---</option>
           <option value={true}>Yes</option>
           <option value={false}>No</option>
          </select>
          </div>
          <div className="submit-review-div">
            <button
            className="submit-review-button"
              type="submit"
            >Submit Review
            </button>
            </div>
         </form>
      </div>
    );
  }
}
 
export default ReviewForm;