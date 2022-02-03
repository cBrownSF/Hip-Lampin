import React from 'react';
class CreateMap extends React.Component {
  constructor(props) {

    super(props)
    this.createMarker=this.createMarker.bind(this)
    this.createInfo=this.createInfo.bind(this)
    this.info;
    const { address, city, zip, state } = this.props
   this.fullAddress = `${address}, ${city}, ${state}, ${zip}`
  }
  componentDidMount() {

   const {address,city,zip,state}=this.props
    this.map = new google.maps.Map(this.mapNode, {
      center: { lat: this.props.lat, lng: this.props.lng },
      gestureHandling: "none",
      fullscreenControl: false,
      zoom: 16
    });

    this.createMarker()
    this.createInfo()

  }
  createMarker(){
  
    const position = new google.maps.LatLng(this.props.lat, this.props.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
    });
    google.maps.event.addListener(this.map, 'tilesloaded',  () =>{
  
 
      this.info.open({
        anchor:marker,
        map:this.map,
        shouldFocus:false
      })
     
    });

    marker.addListener('click', () => {
      
      this.info.open({
        anchor: marker,
        map: this.map,
        shouldFocus: true
      })
      this.info = info;
    });
   
  }
  createInfo(){
    const contentString =
      `<div><p>${this.fullAddress}<p></div>` 
   this.info = new google.maps.InfoWindow({
      content: `<div><p>${this.fullAddress}<p></div>`,
      maxWidth: 130,
     disableAutoPan:true
    })
   
  }
  render() { 
    
    const { address, city, zip, state } = this.props
    const fullAddress = `${address}, ${city}, ${state}, ${zip}`
  
    return (
      <div className="name-box">
        <br/>
        {this.props.styling==='mini-map'? (
          <div>
        <div id='name-title'>
          Confirm your property address
        </div>
        <div className='full-address'>
          {this.fullAddress}
        </div>
          </div>
    ):''}
      <div className={this.props.styling} ref={map => this.mapNode = map}>
        Map
      </div>
      </div >
      );
  }
}
 
export default CreateMap;