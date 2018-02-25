class UsersController < ApplicationController
   before_action :authenticate_user!
    
    def index
        @users = User.includes(:profile)
    end
    
    def show
        # users/:user_id
        @user = User.find(params[:id])
    end
end