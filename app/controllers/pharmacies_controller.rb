class PharmaciesController < ApplicationController
  before_action :set_pharmacy, only: %i[ show edit update destroy ]

  # GET /pharmacies or /pharmacies.json
  def index
    @pharmacies = Pharmacy.all
  end

  # GET /pharmacies/1 or /pharmacies/1.json
  def show
  end

  # GET /pharmacies/new
  def new
    @pharmacy = Pharmacy.new
  end

  # GET /pharmacies/1/edit
  def edit
  end

  # POST /pharmacies or /pharmacies.json
  def create
    @pharmacy = Pharmacy.new(pharmacy_params)

    respond_to do |format|
      if @pharmacy.save
        format.html { redirect_to pharmacy_url(@pharmacy), notice: "Pharmacy was successfully created." }
        format.json { render :show, status: :created, location: @pharmacy }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @pharmacy.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pharmacies/1 or /pharmacies/1.json
  def update
    respond_to do |format|
      if @pharmacy.update(pharmacy_params)
        format.html { redirect_to pharmacy_url(@pharmacy), notice: "Pharmacy was successfully updated." }
        format.json { render :show, status: :ok, location: @pharmacy }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @pharmacy.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pharmacies/1 or /pharmacies/1.json
  def destroy
    @pharmacy.destroy

    respond_to do |format|
      format.html { redirect_to pharmacies_url, notice: "Pharmacy was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pharmacy
      @pharmacy = Pharmacy.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pharmacy_params
      params.fetch(:pharmacy, {})
    end
end
