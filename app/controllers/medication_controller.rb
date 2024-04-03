class MedicationController < ApplicationController

     # Show all the medications
     def index
        @medications = Medication.all 
        render json: @medications, status: :ok
      end
    
    #   show a single medication
    def show
        render json: @medications, status: :ok
      end

       # create a user
    def create
        @medications = Medication.create(medication_params)
  
        if @medications.save
          render json: @medications, status: :ok
        else
          render json: { errors: @medications.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private
  
      def medication_params
        params.permit(:medicationName,:medicationImage,:medicationDesc,:quantity,:price)
      end

end
