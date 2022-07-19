import React from "react";
import { Link} from "react-router-dom";
import { withRouter,hashHistory } from "react-router";
class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lng: null,
      type: null,
      address: '',
      clean:true
    }
    this.search = null;
    this.autoComplete = this.autoComplete.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmitAuto=this.handleSubmitAuto.bind(this)
}
  
componentDidUpdate(prevProps,prevState) {
  if (this.props.bounds && !prevProps.bounds || prevProps.bounds !== this.props.bounds){
    return this.setState({
      lat: null,
      lng: null,
      type: null,
      address: ''
    })
  }
}
handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value,listings:false })
    }
}
handleSubmitAuto(e) {
  
  return this.setState({
    clean:false
  })
}

handleSubmit(e) {
  e.preventDefault()
  let geocoder = new google.maps.Geocoder()
  let geocodeAdd = this.state.address
  geocoder.geocode(
    { address: geocodeAdd },
    (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        return this.setState({
          lng: results[0].geometry.location.lng(), lat: results[0].geometry.location.lat(), type: results[0].types[0]
        })
      }
      else {
        return null;
      }
    }).then(() => this.props.history.replace({
      pathname: '/listings',
      state: {
        lng: this.state.lng,
        lat: this.state.lat,
        type: this.state.type
      }
    }
    )).then(this.setState({
      lat: null,
      lng: null,
      type: null,
      address: '',
      clean: false
    }))
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
    const {lat,lng,type} = this.state
    return this.setState({
      lat: result.geometry? result.geometry.location.lat() : lat,
      lng: result.geometry? result.geometry.location.lng() : lng,
      type: result.types ? result.types[0] : type
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
            onKeyDown={(e)=> {
              let state = this.state;
              let submit = this.handleSubmit
              if (e.keyCode === 13 && this.state.lat && this.props.history.location.pathname !== '/listings'){
                this.props.history.push({
                  pathname: "/listings",
                  state: {
                    lng: state.lng, lat: state.lat, type: state.type
                  }
                })
              } else if (e.keyCode === 13){
                  submit(e)
              }}}
            placeholder='Try Montara,Colorado,United States...' />
        </div>
        
        <div>
        {this.state.lng?(
            <Link to={searchProps}><button className={`${this.props.className}-search-button`} type="button" onClick={this.handleSubmitAuto} ><i className="fas fa-search"></i></button></Link>

        ):(
          
              <Link to="/listings"><button className={`${this.props.className}-search-button`} type="button" onClick={this.handleSubmit}><i className="fas fa-search"></i></button></Link>)          }
              </div> 
     </form>
    </div>

  )
}
}
export default withRouter(SearchBar);
