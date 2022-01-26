import React from 'react';
class CreateMap extends React.Component {
  constructor(props) {
    super(props)
    this.createMarker=this.createMarker.bind(this)
    const { address, city, zip, state } = this.props
   this.fullAddress = `${address}, ${city}, ${state}, ${zip}`
  }
  componentDidMount() {
   const {address,city,zip,state}=this.props
    this.map = new google.maps.Map(this.mapNode, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 13
    });
    this.createMarker()

  }
  createMarker(){
    const position = new google.maps.LatLng(this.props.lat, this.props.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
    });
  }
  createInfo(){
    const contentString =
      `<div><h1>${listing.name}<h1></div>` +
      `<div><img src="${listing.photo}` +
      "</a>";

    let info = new google.maps.InfoWindow({
      content: contentString
    })
  }
  render() { 
    const { address, city, zip, state } = this.props
    const fullAddress = `${address}, ${city}, ${state}, ${zip}`
  
    return (
      <div>
        <div>
          property location
        </div>
        <div>
          Confirm your property address
        </div>
        <div>
          {this.fullAddress}
        </div>
      <div className='mini-map' ref={map => this.mapNode = map}>
        Map
      </div>
      </div >
      );
  }
}
 
export default CreateMap;