import React from 'react'
class ReviewForm extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      title: '',
      description: '',
      helpful: false,
      recommends: 2,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numberInput = this.numberInput.bind(this)
  }
  handleSubmit(e) {
    debugger;
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
          helpful: false,
          recommends: 2,
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Review Form
          </div>
          <div>Title</div>
          <input type="text" 
            value={this.state.title}
            onChange={this.update("title")}
            placeholder=" Enter Title"
          />
          <div> Descript</div>
          <input type="text"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder=" Enter the details"
          />
          <div>
            <button
              type="submit"
            >SUBMIT BUTTON
            </button>
            </div>
         </form>
      </div>
    );
  }
}
 
export default ReviewForm;