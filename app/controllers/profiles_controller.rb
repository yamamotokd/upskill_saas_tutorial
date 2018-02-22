class ProfilesController < ApplicationController
   
   #User makes a get request /users/:user_id/profile/net 
   def new
      #render blank profile details from
      @profile = Profile.new
   end
end