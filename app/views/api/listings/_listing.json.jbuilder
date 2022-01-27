json.merge! listing.attributes
json.photos listing.photos.map {|photo| url_for(photo)}
