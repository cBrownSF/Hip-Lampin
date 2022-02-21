import React from "react";
import ListingIndexItem from "./listing_index_item";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { receiveAllListings } from "../../actions/listings_actions";
const ListingIndex = (props) => {
  const query = useLocation().search
 debugger
  if (Object.keys(props.listings).length === 0 && query !== '?all') {
    return null
  } else if (query === '?all' && Object.keys(props.listings).length === 0){
    debugger; 
    props.receiveListings().then(()=>{
      debugger;
      console.log('in return')
      return (
        <div className="index-item">

          {Object.values(props.listings).map(listing => (
            <ListingIndexItem
              listings={listing}
              key={listing.id}
            />
          ))}
        </div>
      )
    })
    }else{
    
    
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
 


export default ListingIndex;