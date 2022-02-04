class Api::ListingsController < ApplicationController
before_action :require_logged_in, only: [:create]

  def create
    debugger
    @listing = Listing.create!(listing_params)
    render :show
    # if @listing.save
    #     render :show
    #   else
    #     render json: @listing.errors.full_messages, status: 422
    # end
    #DOUBLE CHECK
  end

  def show
    @listing= Listing.with_attached_photos.find(params[:id])
  end

  def update
    @listing = Listing.with_attached_photos.find_by(id: params[:id])
    debugger
    if @listing.update(listing_params)
      
      render :shows
    else
      render json: @listing.errors_full_messages
    end
  end

  def destroy
    @listing = Listing.with_attached_photos.find(params[:id])
     if @listing
      @listing.destroy
      render :show
    else
        render json: {message: "Not found in my list"}, status: 422
    end
  end

  def index
    @listings = bounds ? Listing.in_bounds(params[:bounds]) : Listing.with_attached_photos.all
    # @listings= @listings.includes(:reviews)
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
      :is_campfire_allowed,
      :is_swimming,
      :lat,
      :lng,
      :street_address,
       :city, 
       :state, 
       :zip_code, 
       :country,
       photos:[],
      )
  end

  def bounds
    params[:bounds]
  end
end
