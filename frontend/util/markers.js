import listingErrorsReducer from "../reducers/listing_error_reducer";

class MarkerManager {
  constructor(map){
    this.info;
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    listings.forEach(listing=> {
      let listingIdArray=Object.keys(this.markers)
      if (!listingIdArray.includes(listing.id)){
        this.markers[listing.id] = listing
        this.createMarkerForListing(listing)
    }
  })
  }
  createMarkerForListing(listing){
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position,
      listingId: listing.id,
      map: this.map,
    });
   
    const contentString =
    `<a class='info-link' href="/#/listings/${listing.id}">` +
    `<div class='info-div'>` +
    `<div class="info-header">${listing.name}</div>` +
    `<div class="info-second-header"> $${listing.cost}/per night</div>` +
   `</div>`+
    "</a>";
    
    let info = new google.maps.InfoWindow({
      content:contentString
    })
    marker.addListener('click', () =>{
      if (this.info) {
        this.info.close();
      }
      info.open({
        anchor:marker,
        map:this.map,
        shouldFocus:true
      })
      this.info=info;
    });
    this.markers[marker.listingId] = marker;
  }
}


export default MarkerManager;