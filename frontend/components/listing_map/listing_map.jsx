import React from 'react'
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/markers';

const getCoordinates = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});
const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, 
  zoom: 13
};
class ListingMap extends React.Component {
componentDidMount(){
  debugger;
  this.map = new google.maps.Map(this.mapNode, mapOptions);
  this.MarkerManager= new MarkerManager(this.map)

  this.MarkerManager.updateMarkers(this.props.listings);
}
componentDidUpdate(){
 
  this.MarkerManager.updateMarkers(this.props.listings);
}
eventListeners(){
  google.maps.event.addListener(this.map,"idle",()=>{
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      southWest: { lat: south, lng: west },
      northEast: { lat: north, lng: east }
    };
    this.props.updateBounds(bounds);
  })
google.maps.event.addListener(this.map,'click',(event)=>{
  debugger;
  const coordinates = getCoordinates(event.latLng)
})
}
render(){
  return(
    <div className='map' ref={ map => this.mapNode = map }>
    Map
  </div>
  )
}
}



export default ListingMap