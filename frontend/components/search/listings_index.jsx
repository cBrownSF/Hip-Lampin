import React,{useEffect} from "react";
// import ListingIndexItem from "./listing_index_item";
import ListingIndexItem from "./listing_index_item_func";
const ListingIndex = (props) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  if (props.total === undefined) {
    return null
  } else if (Object.keys(props.listings).length === 0 && props.total === 0){
    return(
      <div className='no-listings'>Sorry, there are no current listings which match the search criteria. Try zooming the map out to find nearby listings. </div>
    )}else{
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