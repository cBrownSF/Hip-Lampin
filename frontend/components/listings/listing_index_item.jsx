import React from "react";
import { Link } from "react-router-dom";
const ListingIndexItem = (props) => {
  return <li>
    <img src={props.listings.photoURL} height="200px" width="200px"/>
    <p className='index-item'><Link className ="index-link" to={`/listings/${props.listings.id}`}>{props.listings.name}</Link></p>
    <p className='index-item'>{`${props.listing.cost}/night}`}</p>
  </li>
}

export default ListingIndexItem;