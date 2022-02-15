json.merge! user.attributes
if user.photo.attachment == nil
   json.photoUrl = ""
debugger
else
   json.photoURL url_for(user.photo)
end