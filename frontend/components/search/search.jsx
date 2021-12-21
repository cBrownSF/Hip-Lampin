import React from 'react'
import ListingIndex from './listings_index'
import ListingMap from './../listing_map/listing_map'
import PhotoForm from '../listings/photos';
class Search extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    debugger;
    this.props.receiveListings()
  }

render(){
  if (!this.props.listings){
    return null;
  }
  return(
<div>
  <p>HELLO</p>
  <div>
  <ListingMap 
    listings={this.props.listings}
    receiveListings={this.props.receiveListings}
  />
</div>
<div>
  <ListingIndex 
    listings={this.props.listings}  
  />
</div>
</div>
)
}
}

export default Search;