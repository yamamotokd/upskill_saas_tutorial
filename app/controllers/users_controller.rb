class UsersController < ApplicationController
    def show
        # users/:user_id
        @user = User.find(params[:id])
    end
end