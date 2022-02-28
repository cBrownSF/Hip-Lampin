class Reservation < ApplicationRecord
  validates :listing_id,:total_price,:total_guests,:guest_id,:nights,:check_in,:check_out, presence:true

  belongs_to :guest,
    foreign_key: :guest_id

  belongs_to :listing,
    # foreign_key: :listing_id
    class_name: :Listing
end
