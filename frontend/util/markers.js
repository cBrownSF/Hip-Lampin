import listingErrorsReducer from "../reducers/listing_error_reducer";

class MarkerManager {
  constructor(map){
    this.info;
    this.map = map;
    // this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    console.log('updating')
  
    listings.forEach(listing=> {
      if (!(listing.id in this.markers)){
        this.markers[listing.id] = listing
        this.createMarkerForListing(listing)
    }
    })

  }
  createMarkerForListing(listing){
    debugger;
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position,
      listingId: listing.id,
      map: this.map,
    });
   
    const contentString =
    `<a href="/#/listings/${listing.id}">` +
    `<div><h1>${listing.name}<h1></div>` +
    `<div><img src="${listing.photo}` +
    "</a>";
    
    let info = new google.maps.InfoWindow({
      content:contentString
    })
    marker.addListener('click', () =>{
      info.open({
        anchor:marker,
        map:this.map,
        shouldFocus:true
      })
    });
    this.markers[marker.listingId] = marker;
  }

  
  
}


export default MarkerManager;