class Listing < ApplicationRecord
   has_many_attached :photos,dependent: :destroy
  validates :host_id,:lat, :lng,:state,:city,:zip_code,:street_address, presence: true
  validates :is_shower,:is_wifi, :is_picnic_table,:is_toilet,:is_campfire_allowed,:is_trash, :is_kitchen,inclusion: {in: [true, false] }
  # validates :is_kitchen, inclusion: {in: [true, false] }
  validates :name,:description,:cost,:guests_allowed, :on_arrival,:minimum_night, presence:true
  validates :check_in_time, :check_out_time,:response_time,:cancellation_policy,:booking_time, presence:true


  belongs_to :host,
  foreign_key: :host_id,
  class_name: 'User'
  
  has_many :reviews,
    foreign_key: :listing_id,
    class_name: :Review
  
   def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
