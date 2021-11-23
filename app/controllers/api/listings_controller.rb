class Api::ListingsController < ApplicationController

  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render "api/listings/show"
    else
      render json: @listing.error.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :name,
      :description,
      :cost,
      :guests_allowed, 
      :on_arrival,
      :minimum_night,
      :check_in_time, 
      :check_out_time,
      :response_time,
      :cancellation_policy,
      :booking_time,
      :is_trash,
      :is_kitchen,
      :is_shower,
      :is_wifi, 
      :is_picnic_table,
      :is_toilet,
      :is_campfire_allowed
      )
  end
end
