class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  # before_action :find_listing,:find_author

  def create
    @review = current_user.reviews.new(review_params)
    debugger
    # @review.author_id=@author.id
    if @review.save
      debugger
      render :show
    else
      debugger
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

  def destroy
   @review = Review.find_by(id: params[:id])
   if @review
    debugger
    @review.destroy
    render :show
   else
    debugger
    render json: {message: "Not found in my list"}, status: 422
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
    params.require(:review).permit(:listing_id,:description,:title,:recommends,:helpful)
  end
end
