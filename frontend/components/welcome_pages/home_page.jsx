import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      lat:null,
      lng:null,
      type:null
    }
    this.search = null;
    this.autoComplete=this.autoComplete.bind(this)
  }

  autoComplete() {
    const options = {
      componentRestrictions: { country: ["us"] },
      fields: ["geometry", "type", "adr_address", "name"],
      types: ['(regions)']
    }
    let searchBar = document.getElementById("city-search")

    this.search=new google.maps.places.Autocomplete(searchBar, options)
  
    let auto = this.search;
    this.search.addListener('place_changed', () => {
      let result = auto.getPlace()
      return this.setState({
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
        type:result.types[0]
      })
    })

  }
  render() { 
    const searchProps = {
      pathname: "/listings",
      state: {lng:this.state.lng,lat:this.state.lat,type:this.state.type}
    };
    return (  
      <section>
      <div className='splash-container'>
        <div className='title-container'>
          <h1 className="header-home">Find yourself outside</h1>
          <p className="sub-header-home">Discover and book camping, glamping, parks, and cabins</p>
      </div>
      <div className="search-wrapper">
        <form className="search-form">
        <div className="search-bar">
          <label htmlFor="search">Where to?</label>
          <input 
          className="home-boxes"
          type="text"
          id="city-search" 
          onSelect={this.autoComplete}
          placeholder='Try Yosemite,Moss Beach,Joshua Tree'/>
          </div>
        <div className="search-bar">
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
        </div>
        <Link to={searchProps}><button className="search-button" type="submit">Search</button></Link>
        </form>
      </div>
     


      </div>
      <div className='photo-link-container'>
        <div></div>
      </div>
        </section>


    );
  }
}
 
export default withRouter(HomePage);
