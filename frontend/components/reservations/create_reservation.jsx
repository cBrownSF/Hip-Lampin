import React from "react";
class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    let d =new Date()
    let year= d.getFullYear();
    let day = d.getDate()
    let month = d.getMonth()+1;
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    let dateToday = `${year}-${month}-${day}`
    console.log(this.state)
  
    this.state={
      startDate: dateToday
    }
    this.dateSelect=this.dateSelect.bind(this)
    this.dateToday=dateToday
  }
 
  dateSelect(e){
    console.log(this.state.startDate)
    e.preventDefault()
    return this.setState({
      startDate:e.target.value
    })
  }

  render() { 
    const {startDate} = this.state
   const {cost,guestsAllowed}=this.props
    return ( 
      <div>
        <div className='cost-show'>
          {/* <p id="link-location">{isHost(cost)}</p> */}
          <div className='cost-per-night'>
            <span id="price">{`$${cost}`}</span>
          <div>
            {this.props.guestsAllowed ===1 ?(
                <p id='per-night'> {guestsAllowed} guest</p>):(
                  <p id='per-night'> {guestsAllowed} guests</p>
                )
            }</div>
          </div>
          <div className='check-in'>
            <button>Check In</button>
            <input 
            type="date"
            value={startDate}
            min={this.dateToday}
              onChange={this.dateSelect}
            />
         
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