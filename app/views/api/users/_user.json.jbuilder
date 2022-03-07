json.merge! user.attributes
if user.photo.attachment == nil
   json.photoUrl = ""
else
   json.photoURL url_for(user.photo)
end


json.set! 'reservations' do
  user.reservations.each do |reservation|
    json.set! reservation.id do
      json.extract! reservation, :id, :check_in, :check_out, :listing_id, :guest_id, :total_price, :total_guests,:nights
      json.listing reservation.listing
      json.photos reservation.listing.photos.map {|photo| url_for(photo)} 
    end
  end
end



