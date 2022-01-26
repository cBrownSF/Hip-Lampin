import React from 'react';
class CreateMap extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

    this.map = new google.maps.Map(this.mapNode, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 13
    });
  }
  render() { 
    return (
      <div className='mini-map' ref={map => this.mapNode = map}>
        Map
      </div>
      );
  }
}
 
export default CreateMap;