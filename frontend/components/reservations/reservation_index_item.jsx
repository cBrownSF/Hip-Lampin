import React from "react";
import { Link } from "react-router-dom";
class ReservationIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
    this.updateDate=this.updateDate.bind(this)
  }
  componentDidMount(){
    this.updateDate()
  }

  updateDate(){
    const {reservation } = this.props
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let d = new Date(reservation.check_in)
    let monthInName = months[d.getMonth()]
    let dayIn = d.getDate()
    let yearIn = d.getFullYear()
    let d2 = new Date(reservation.check_out)
    let monthOutName = months[d2.getMonth()]
    let dayOut = d2.getDate()
    let yearOut = d2.getFullYear()
    return this.setState({
      checkIn:`${monthInName} ${dayIn}, ${yearOut}`,
      checkOut: `${monthOutName} ${dayOut}, ${yearOut}`
    })
  }
  render() { 
    if (!Object.values(this.state).length){
      return null;
    }
   
    debugger;
    const {listing,photos,reservation}=this.props
    const {checkIn,checkOut}=this.state
    const resShow = {
      pathname: `/reservations/${reservation.id}`,
      state: { checkIn: this.state.checkIn, checkOut: this.state.checkOut }
    }

    return(
    <div>
      <li className='index-item-li'>
        <div className="listing-index-item-box">
          <div className="slider-container">
            <div className='slider-div'>
              <img className="index-photo" src={photos[0]} height="200px" width="200px" />
            </div>
          </div>
          {/* <img className="index-photo"src={photos[0]} height="200px" width="200px"/> */}

          <Link className='link-over-text-box-reserv' to={resShow}> <div className='text-index-box'>
            {/* <Link className ="index-link" to={`/listings/${this.props.listings.id}`}>{this.props.listings.name}</Link> */}
            <p className="index-link" >{listing.name}</p>
            <div className='check-in-out-item'>
                <p className="reserv-p">{checkIn} - {checkOut}</p>
            </div>
              <div className='night-out-item'>
                <p className="reserv-p">{listing.city},{listing.state}</p>
            <p className="reserv-p-end">${reservation.total_price} total</p>
            </div>
          </div></Link>
        </div>
      </li>
    </div>
    )
  }
}
 
export default ReservationIndexItem;