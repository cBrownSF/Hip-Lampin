import React from 'react'
import ListingIndex from './listings_index'
import ListingMap from './../listing_map/listing_map'
class Search extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.receiveListings()
   
  }

render(){
  if (Object.keys(this.props.listings).length ===0){
    
    return null;
  }
  return(
<div>
  <p>HELLO</p>
  <div>
  <ListingMap 
    listings={this.props.listings}
    receiveListings={this.props.receiveListings}
    updateBounds={this.props.updateBounds}
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