class Api::SessionsController < ApplicationController

  def destroy
    @current_user = current_user
    if !@current_user
      render json: ["Invalid user credentials"], status: 401
    else
      logout!
      render "api/users/show"
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
  
    if @user.nil?
      render json: ["Invalid username or password"], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end
end

