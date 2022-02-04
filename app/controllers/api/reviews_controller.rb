class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  before_action :find_listing,:find_author

  def create
    @review = current_user.reviews.new(review_params)
    @review.listing_id=@listing.id
    # @review.author_id=@author.id
    if @review.save
      debugger
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
  def find_listing
    @listing=Listing.find_by(params[:listing_id])
  end
  def find_author
    @author=User.find_by(params[:author_id])
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
    params.require(:review).permit(:listing_id,:description,:title,:recommends,:helpful)
  end
end
