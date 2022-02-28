json.reservation do
  json.partial! '/api/reservations/reservation', reservation: @reservation
end
json.listing @reservation.listing 
json.photos @reservation.listing.photos.map {|photo| url_for(photo)}