import React from "react";
import { Link } from "react-router-dom";
const ListingIndexItem = (props) => {
console.log(props)
  return <li className='index-item-li'>
    <div className="listing-index-item-box">
      <img className="index-photo"src={props.listings.photos[0]} height="200px" width="200px"/>
      <Link className='link-over-text-box' to={`/listings/${props.listings.id}`}> <div className='text-index-box'>
      {/* <Link className ="index-link" to={`/listings/${props.listings.id}`}>{props.listings.name}</Link> */}
        <p className="index-link" >{props.listings.name}</p>
        <p className="index-location-cost">{props.listings.city},{props.listings.state}</p>
        <p className="index-location-cost">From ${props.listings.cost}/per night</p>
  </div></Link>
    </div>
  </li>
}

export default ListingIndexItem;