json.listing do
  json.partial! "api/listings/listing",listing: @listing
  json.reviewIds @listing.reviews.pluck(:id)
end

@listing.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review',review: review
    end
end

json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :fname, :lname
    end
  end
end

@listing.host do
 json.partial! '/api/users/user', user: @listing.host_id
end