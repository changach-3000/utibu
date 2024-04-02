class SessionController < ApplicationController
    skip_before_action :authorize, only: [:login,:logout]
    ##login function
    def login 
         fullName = params[:fullName]
         password = params[:password]
         
         user = Customer.find_by(fullName: fullName)
 
         if user && user.authenticate(password)
             session[:customer_id]=user.id
 
             render json: {success: "Login success"}
         else
             render json: {error: "Wrong username/password"}
 
         end
     end 
  
 
     def logout
        session.delete :customer_id
        render json: {success: "Logout success"}
     end
end
