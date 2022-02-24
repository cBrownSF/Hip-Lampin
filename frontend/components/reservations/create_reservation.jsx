import React from "react";
class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    let d =new Date()
    let year= d.getFullYear();
    let day = d.getDate()
    let month = d.getMonth();
    day < 10? day=`0
    console.log(`${year}-${day}-${month}`)
    this.state={
      start_date:null
    }
    console.log(this.state)
  }

  render() { 
    return ( 
      <div>
        <div className='cost-show'>
          {/* <p id="link-location">{isHost(cost)}</p> */}
          <div className='cost-per-night'>
            <span id="price">{`$${this.props.cost}`}</span>
          <div>
            {this.props.guestsAllowed ===1 ?(
                <p id='per-night'> {this.props.guestsAllowed} guest</p>):(
                  <p id='per-night'> {this.props.guestsAllowed} guests</p>
                )
            }</div>
          </div>
          <div className='check-in'>
            <button>Check In</button>
            <input type="date"


            />
            <div>
              <button>Check Out</button>
              <input type="date"


              />
            </div>
          </div>
          <div className='request-div'>
            <button className='request-to-book'>Request to Book</button>
          </div>
        </div>
        </div>
     );
  }
}
 
export default ReservationForm;