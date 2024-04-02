class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
 
    private
    def authorize
       @current_user=Customer.find_by(id: session[:customer_id])
       if !@current_user
          render json: {"error": "not authorized"}
       end
    
    end
 end