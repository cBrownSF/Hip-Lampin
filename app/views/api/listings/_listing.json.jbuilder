json.merge! listing.attributes
if listing.photos.attachment == nil
   json.photoUrl = ""
else
   json.photoURL url_for(listing.photo)
end

