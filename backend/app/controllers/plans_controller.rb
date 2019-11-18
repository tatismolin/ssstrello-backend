class PlansController < ApplicationController

    def index
        plans = Plan.all 
        render json: plans, include: [:lists]
    end

    def show
        plan = Plan.all 
        render json: plan
    end

end
