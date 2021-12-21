import React from 'react'
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/markers';
class ListingMap extends React.Component {
componentDidMount(){
  const mapOptions = {
    center: { lat: 37.7758, lng: -122.435 }, 
    zoom: 13
  };
  this.map = new google.maps.Map(this.mapNode, mapOptions);
  this.MarkerManager= new MarkerManager(this.map)
  debugger;
  this.MarkerManager.updateMarkers(this.props.listings);
}
componentDidUpdate(){
  debugger;
  this.MarkerManager.updateMarkers(this.props.listings);
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