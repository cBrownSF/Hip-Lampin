class Api::SessionsController < ApplicationController

  def destroy
    @user = current_user
    if !@user
      render json: ["Not currently signed in"], status: 401
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

