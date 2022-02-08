class Review < ApplicationRecord
  validates :author_id,:listing_id,:description,:title,:helpful,presence: true
 validates :recommends,:helped inclusion: {in: [true, false] }
  belongs_to :listing,
    foreign_key: :listing_id
    #class_name: :Listing
  belongs_to :author,
    # foreign_key: :author_id
    class_name: :User
end
