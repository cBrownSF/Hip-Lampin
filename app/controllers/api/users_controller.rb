class Api::UsersController < ApplicationController
before_action :require_logged_in, only: [:update]
  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

def update
 @user = User.with_attached_photo.find_by(id: params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors_full_messages
    end
  end

  def show
    @user = User.with_attached_photo.find_by(id: params[:id])
    render "api/users/show"
  end

  private
  
  def user_params
    params.require(:user).permit(:email, :password,:fname,:lname,:intro,:photo)
  end
end