import React from 'react'
import ListingIndex from './listings_index'
import ListingMap from './../listing_map/listing_map'

class Search extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(this.props.allListings === '?all'){
      this.props.receiveListings()
    }
   
  }
componentWillUnmount(){
  console.log('unmounted')
}
render(){

  if (Object.keys(this.props.listings).length === 0 && this.props.allListings === '?all'){
    
    return null;
  }
  return(
<div className="index-container">
  <div className="map-item-container">
    <div className="listing-index-container">
    <ListingIndex 
      listings={this.props.listings} 
      receiveListings={this.props.receiveListings}
      total={this.props.total}
    />
    </div>
    <div>
      {this.props.allListings !== '?all' ? (
    <div className="listing-map-index-page">
      <ListingMap 
        listings={this.props.listings}
        receiveListings={this.props.receiveListings}
        updateFilter={this.props.updateFilter}
        bounds={this.props.searchInfo}

      />
    </div>):<div></div>
    }
      </div>
  </div>
</div>
)
}
}

export default Search;