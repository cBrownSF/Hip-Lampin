require 'byebug'
class Api::ListingsController < ApplicationController

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      render json: ['Missing a required field']
    end
  end

  def show
    @listing= Listing.find(params[:id])
  end

  def update
    @listing = Listing.find_by(id: params[:id])

    if @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors_full_messages
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render :show
  end

  def index
    @listings = Listing.all
    render :index
  end
  
  private

  def listing_params
  
    params.require(:listing).permit(
      :name,
      :host_id,
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
      :is_fishing,
      :is_wildlife,
      :is_paddling,
      :is_paddling,
      :is_hiking,
      :is_trash,
      :is_kitchen,
      :is_shower,
      :is_wifi, 
      :is_picnic_table,
      :is_toilet,
      :is_campfire_allowed)
  end
end
