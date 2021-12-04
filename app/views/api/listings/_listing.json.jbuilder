json.merge! listing.attributes
if listing.photo.attachment == nil
   json.photoUrl = ""
else
   json.photoURL url_for(listing.photo)
end

