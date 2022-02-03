class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

   def update
    @review = Review.find_by(id: params[:id])
    
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors_full_messages
    end
  end

  # def index
  #   @reviews= Review.all
  #   render :index
  # end

  # def show
  #   @review= Review.find(params[:id])
  #   render :show
  # end
  
  private

  def review_params
    params.require(:review).permit(:author_id, :listing_id,:description,:title,:recommends,:helpful)
  end
end
