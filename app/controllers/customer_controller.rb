class CustomerController < ApplicationController
    skip_before_action :authorize

    # Show all the users
    def index
        @customers = Customer.all 
        render json: @customers, status: :ok
      end
    
    #   show a single user
    def show
        render json: @customer, status: :ok
      end

    #   get the current user
    def current_user 
        user = Customer.find_by(id: session[:customer_id])
  
        if user
          render json: user, status: :ok
          
        else
          render json: { errors: ['User not found'] }, status: :not_found
        end
  
    end

    # create a user
    def create
        @customer = Customer.create(user_params)
  
        if @customer.save
          render json: @customer, status: :ok
        else
          render json: { errors: @customer.errors.full_messages }, status: :unprocessable_entity
        end
      end

    #   delete user
    def destroy
        @customer.destroy
      end

      private
  
      def user_params
        params.permit(:fullName,:password,:phoneNumber,:address)
      end
    
      def set_user
        @customer= Customer.find(params[:id])
      end


end

