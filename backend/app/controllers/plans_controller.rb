class PlansController < ApplicationController

    before_action :find_plan, only: [:show, :update, :destroy]

    def index
        @plans = Plan.all 
        render json: @plans, include: {lists: {:include => :tasks}} 
    end

    def create
        @plan = Plan.create(allowed_params)
        render json: @plan
    end

    def show
        render json: @plan
    end

    def update
        @plan.update(allowed_params)
    end

    def destroy
        @plan.delete
    end

    private

    def find_plan
        @plan = Plan.find(params[:id])
    end

    def allowed_params
        params.require(:plan).permit(:name)
    end

end
