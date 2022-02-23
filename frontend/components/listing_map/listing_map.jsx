import React from 'react'
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/markers';

// const getCoordinates = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });
// const mapOptions = {
//   center: { lat: 37.7758, lng: -122.435 }, 
//   zoom: 13
// };
class ListingMap extends React.Component {
 
componentDidMount(){
  this.newMap()
  // console.log(service)
  // console.log(new google.maps.places.AutocompleteService())
}
newMap(){
  if (this.props.bounds) {
    const { lat, lng, type } = this.props.bounds
    localStorage.setItem('lat', lat)
    localStorage.setItem('lng', lng)
    localStorage.setItem('type', type)
  }
  let degree;
  let latitude = parseFloat(localStorage.getItem('lat'))
  let longitude = parseFloat(localStorage.getItem('lng'))
  let type = localStorage.getItem('type')
  if (type === 'locality') {
    degree = 12
  } else if (type === 'country') {

    degree = 4
  } else {
    degree = 6
  }
  const mapOptions = {

    center: { lat: latitude, lng: longitude },
    zoom: degree
  };
  this.map = new google.maps.Map(this.mapNode, mapOptions);
  this.eventListeners()
  this.MarkerManager = new MarkerManager(this.map)
  this.MarkerManager.updateMarkers(this.props.listings);
}
componentWillUnmount(){
  debugger;
  if (location.hash ==="#/listings?all"){
    this.props.receiveListings()
  }
}
componentDidUpdate(prevProps,){
  if (prevProps.bounds !==this.props.bounds){
    debugger;
    this.newMap()
  }
  this.MarkerManager.updateMarkers(this.props.listings);
}
eventListeners(){
  google.maps.event.addListener(this.map,"idle",()=>{
    console.log('event listener map')
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      southWest: { lat: south, lng: west },
      northEast: { lat: north, lng: east }
    };
    this.props.updateFilter('bounds',bounds);
  })
// google.maps.event.addListener(this.map,'click',(event)=>{
//   const coordinates = getCoordinates(event.latLng)
//   console.log('clicked')
// })
}

render(){
  debugger;
  // console.log(this.state)
  // if (this.state.loaded=false){
  //   debugger;
  //   return null;
  // }
  return(
    <div className="map-container">
    <div className='map' ref={ map => this.mapNode = map }>
    Map
  </div>
    </div>
  )
}
}



export default ListingMap