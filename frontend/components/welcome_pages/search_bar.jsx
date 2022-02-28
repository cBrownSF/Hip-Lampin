import React from "react";
import { Link,Redirect } from "react-router-dom";
import { withRouter } from "react-router";
class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lng: null,
      type: null,
      address: '',
    }
this.search = null;
this.autoComplete = this.autoComplete.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
this.handleInput=this.handleInput.bind(this)
}
  componentDidMount(){
    console.log('search mount')
  }
  componentDidUpdate(){
    if (this.lat){
      console.log('hello')
    }
  }
handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
}
handleSubmit(e){

debugger
  e.preventDefault()
  let geocoder = new google.maps.Geocoder()
  console.log(this.state.address)
  let geocodeAdd=this.state.address
  console.log(this.state)
  geocoder.geocode(
    {address:geocodeAdd},
    (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        debugger
        let gCodesearchProps = {
          pathname: "/listings",
          state: { lng: results[0].geometry.location.lng(), lat: results[0].geometry.location.lat(), type: results[0].types[0] },
        };
        return this.setState({
          lng: results[0].geometry.location.lng(), lat: results[0].geometry.location.lat(), type: results[0].types[0]
        })
        // <Link to={gCodesearchProps} />
        // console.log(results)
        // console.log(gCodesearchProps)
          }
      else{
        return null;
      }
    }).then(() => this.props.history.push({
      pathname: '/listings',
      state: {
        lng: this.state.lng,
        lat: this.state.lat,
       type: this.state.type
      }
    }
    ))
}

autoComplete() {
  const options = {
    componentRestrictions: { country: ["us"] },
    fields: ["geometry", "type", "adr_address", "name"],
    types: ['(regions)']
  }
  let searchBar = document.getElementById("city-search")

  this.search = new google.maps.places.Autocomplete(searchBar, options)

  let auto = this.search;
  this.search.addListener('place_changed', () => {
    let result = auto.getPlace()
    console.log(result.types[0])
    return this.setState({
      lat: result.geometry.location.lat(),
      lng: result.geometry.location.lng(),
      type: result.types[0]
    })
    
  })

}
render() {

  const searchProps = {
    pathname: "/listings",
    state: { lng: this.state.lng, lat: this.state.lat, type: this.state.type },
  };

  return(
    <div className={this.props.className}>
      <form className={`${this.props.className}-search-form`}>
        <div className={`${this.props.className}-search-bar`}>
          <label htmlFor="search" className={`${this.props.className}-where`}>Where to?</label>
          <input
            className={`${this.props.className}-home-boxes`}
            type="text"
            id="city-search"
            onSelect={this.autoComplete}
            onChange={this.handleInput('address')}
            placeholder='Try Montara,Colorado,United States...' />
        </div>
        {/* <div className="search-bar">
          <label htmlFor="dates">Dates</label>
          <input
            type="date"
            className="home-boxes"
            id="date"
            placeholder="Enter Dates"
          />
        </div>
        <div className="search-bar">
          <label for="guests">Guests</label>
          <input
            className="home-boxes"
            type="Select"
            id="date"
          />
          <Link to={searchProps} key={Math.random()} ><button className="search-button" type="submit"><i class="fas fa-search"></i></button></Link> )
        </div> */}
        <div>
        {this.state.lng?(
            <Link to={searchProps} key={Math.random()} ><button className={`${this.props.className}-search-button`} type="submit"><i className="fas fa-search"></i></button></Link>

        ):(
          
             <Link to="/listings"><button className={`${this.props.className}-search-button`} type="button" onClick={this.handleSubmit}><i className="fas fa-search"></i></button></Link>)
          }</div> 
     </form>
    </div>

  )
}
}
export default withRouter(SearchBar);
