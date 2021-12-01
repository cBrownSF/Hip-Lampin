import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.receiveListings()
  }
  
  render(){
    // if (!this.props.listing) {
    //   return null;
    // }
    const Array = Object.values(this.props.listings)

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