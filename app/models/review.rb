class Review < ApplicationRecord
  validates :author_id,:listing_id,:description,:title,:recommends,:helpful,presence: true

  belongs_to :listing,
    foreign_key: :listing_id
    class_name: :Listing
  belongs_to :author,
    foreign_key: :author_id
    class_name: :User
end
