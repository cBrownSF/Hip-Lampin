import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // debugger;
    // // this.props.receiveListings()
  }
  
  render(){
    if (Object.keys(props.listing).length === 0) {
      debugger;
      return null;
    }
    const Array = Object.values(this.props.listings)
    debugger;
    return (
      <div>
        <h1>Listing: </h1>
          {Array.map(listing =>(
            <ListingIndexItem
            listings={listing}
            key={listing.id}
            />
          ))}
      </div>
    )
  }
}

export default ListingIndex;