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
      clean:true
    }
this.search = null;
this.autoComplete = this.autoComplete.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
this.handleInput=this.handleInput.bind(this)
this.handleSubmitAuto=this.handleSubmitAuto.bind(this)
}
  componentDidMount(){
    console.log(this.props)
    // this.props.clearListings()
  }
  componentDidUpdate(prevProps,prevState){
  if(this.state.clean===false){
    // console.log('unclean')
    //   return this.setState({
    //     lat: null,
    //     lng: null,
    //     type: null,
    //     address: '',
    //     clean: true
    //   })
   }
  }
handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value,listings:false })
    }
}
handleSubmitAuto(e){
  console.log('submit')
  return this.setState({
    clean:false
  })
}
componentWillUnmount(){
  console.log('unmount')
}
  handleSubmit(e) {

    debugger
    e.preventDefault()
    let geocoder = new google.maps.Geocoder()
    console.log(this.state.address)
    let geocodeAdd = this.state.address
    console.log(this.state)
    geocoder.geocode(
      { address: geocodeAdd },
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
      ))
    }
    // .then(this.setState({
    //   lat: null,
    //   lng: null,
    //   type: null,
    //   address: '',
    //   clean: true}))


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
            onChange={this.handleInput('address')}
            placeholder='Try Montara,Colorado,United States...' />
        </div>
        
        <div>
        {this.state.lng?(
           <Link to={searchProps}><button className={`${this.props.className}-search-button`} type="button" onClick={this.handleSubmitAuto}><i className="fas fa-search"></i></button></Link>

        ):(
          
              <Link to="/listings"><button className={`${this.props.className}-search-button`} type="button" onClick={this.handleSubmit}><i className="fas fa-search"></i></button></Link>)          }</div> 
     </form>
    </div>

  )
}
}
export default withRouter(SearchBar);
