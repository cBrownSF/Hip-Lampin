import React from "react";
import { Link,Redirect } from "react-router-dom";
import { withRouter } from "react-router";
class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lng: null,
      type: null
    }
this.search = null;
this.autoComplete = this.autoComplete.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
  }
  componentDidMount(){
    console.log('search mount')
  }
  componentDidUpdate(){
    if (this.lat){
      console.log('hello')
    }
  }
handleSubmit(e){
  // const searchProps = {
  //   pathname: "/listings",
  //   state: { lng: this.state.lng, lat: this.state.lat, type: this.state.type },
  // };

  e.preventDefault()

  // if (this.state.lat && this.state.lng && this.state.type){
  //   debugger;
  //   <Redirect to={searchProps} key={Math.random()} />
  // }
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
          
              <button className={`${this.props.className}-search-button`} type="button" onClick={this.handleSubmit}><i className="fas fa-search"></i></button>)
          }</div> 
     </form>
    </div>

  )
}
}
export default withRouter(SearchBar);
