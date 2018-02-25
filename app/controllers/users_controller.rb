class UsersController < ApplicationController
   before_action :authenticate_user!
    
    def index
        
    end
    
    def show
        # users/:user_id
        @user = User.find(params[:id])
    end
end