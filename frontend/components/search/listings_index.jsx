import React from "react";
import ListingIndexItem from "./listing_index_item";
import { Link } from "react-router-dom";
const ListingIndex = (props) => {
  
    if (Object.keys(props.listings).length === 0) {
      return null;
    }else{
      console.log(props.listings.id)
      debugger;
      return(
        <div className="index-item">

          {Object.values(props.listings).map(listing => (
            <ListingIndexItem
              listings={listing}
              key={listing.id}
            />
          ))}
        </div>
      )
    }
  }
  //   const Array = Object.values(this.props.listings)
  //   return (
  //     <div>
  //       <h1>Listing: </h1>
  //         {Array.map(listing =>(
  //           <ListingIndexItem
  //           listings={listing}
  //           key={listing.id}
  //           />
  //         ))}
  //     </div>
  //   )
  // }


export default ListingIndex;