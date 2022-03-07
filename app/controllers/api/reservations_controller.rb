class Api::ReservationsController < ApplicationController
  before_action :require_logged_in,only: [:create,:destroy,:update]

def create
  @reservation = current_user.reservations.new(reservation_params)
    
    if @reservation.save
      render :show
    else
      
      render json: @reservation.errors.full_messages, status: 422
    end
end

def update
    @reservation = Reservation.find_by(id: params[:id])
   if @reservation.update(reservation_params)
      render :show
    else
      render json: @review.errors_full_messages
    end
end

def show
  @reservation= Reservation.find(params[:id])
  render :show
end

def destroy
  @reservation = Reservation.find_by(id: params[:id])
  if @reservation
    @reservation.destroy
    render :show
  else
    render json: {message: "Not found in my list"}, status: 422
   end
end

 def reservation_params
    params.require(:reservation).permit(:listing_id,:guest_id,:total_price,:total_guests,:nights,:check_in,:check_out)
  end
end