import listingErrorsReducer from "../reducers/listing_error_reducer";

class MarkerManager {
  constructor(map){
    
    this.map = map;
    // this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    console.log('updating')
    const allListings = {};
    listings.forEach(listing=> allListings[listing.id] = listing)
  }
  createMarkerForListing(listing){
    debugger;
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position:position,
      listingId: listing.id,
      map: this.map,
    });
    marker.addListener('click', () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }
}


export default MarkerManager;