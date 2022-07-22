import React from "react";
import { Link } from "react-router-dom";
import { clearListings } from "../../actions/filter_actions";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";
class HomePage extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.clearListings()
  }
  
  render() { 
    const yosemiteProps = {
      pathname: "/listings",
      state: { lng: -122.516089, lat: 37.542162, type: "locality"},
    };
    const southCarolinaProps={
      pathname: "/listings",
      state: { lng: - 81.163727, lat: 33.836082, type: "administrative_area_level_1" },
    }
    return (  
      <section>
      <div className='splash-container'>
        <div className='title-container'>
          <h1 className="header-home">Find yourself outside</h1>
          <p className="sub-header-home">Discover and book camping, glamping, and cabins in the U.S.</p>
        </div>
        </div>
      <div>
        <SearchBar 
        className='search-wrapper'
        history={this.props.history}
        clearListings={this.props.clearListings}
        />
      </div>
      <div className="main-photo-div">
      </div>
      <div className='home-page-link-div' >
          <div className="home-page-link-photo-left">
            <div className='card-cover'>
              <Link className="link-yos-carolina" to={southCarolinaProps}><p className="font-main-page-photo">Carolina Hideaways</p></Link>
            </div>
          </div>
          <div className="home-page-link-photos">
            <div className='card-cover-right'>
              <Link className="link-yos-carolina"to={yosemiteProps}><p className="font-main-page-photo">Montara Getaways</p></Link>
            </div>
          </div>
      </div>
        </section>


    );
  }
}
 
export default withRouter(HomePage);
