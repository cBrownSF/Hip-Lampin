import React from "react";
import ListingIndexItem from "./listing_index_item";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { receiveAllListings } from "../../actions/listings_actions";
const ListingIndex = (props) => {
 
  if (Object.keys(props.listings).length === 0) {
    return null
  } else{
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