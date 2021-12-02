import React from "react";
import { Link } from "react-router-dom";
const ListingIndexItem = (props) => {
  debugger;
  return <li>
    <Link to={`/listings/${props.listings.id}`}>{props.listings.name}</Link>
    
  </li>
}

export default ListingIndexItem;