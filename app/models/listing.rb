class Listing < ApplicationRecord
  validates :host_id,presence: true
  validates :is_shower,:is_wifi, :is_picnic_table,:is_toilet,:is_campfire_allowed,:is_trash, :is_kitchen,inclusion: {in: [true, false] }
  # validates :is_kitchen, inclusion: {in: [true, false] }
  validates :name,:description,:cost,:guests_allowed, :on_arrival,:minimum_night, presence:true
  validates :check_in_time, :check_out_time,:response_time,:cancellation_policy,:booking_time, presence:true


  belongs_to :host,
  foreign_key: :host_id,
  class_name: 'User'
  
end
