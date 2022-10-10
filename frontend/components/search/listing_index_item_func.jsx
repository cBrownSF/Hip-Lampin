import React from 'react';
import Slider from './slider';
import { Link } from "react-router-dom";

export default function ListingIndexItem({listings: {photos, id, name, city, state, cost}}) {
  return (
    <li className='index-item-li'>
      <div className="listing-index-item-box">
        <Slider photos = {photos} page = "index"/>
        <Link className='link-over-text-box' to={`/listings/${id}`}>
          <div className='text-index-box'>
            <p className="index-link" >{name}</p>
            <p className="index-location-cost">{city},{state}</p>
            <p className="index-location-cost">From ${cost}/per night</p>
          </div>
        </Link>
      </div>
  </li>
  )
}