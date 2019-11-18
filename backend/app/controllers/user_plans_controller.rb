class UserPlansController < ApplicationController

    def index
        user_plans = UserPlan.all 
        render json: user_plans, include: [:plan, :user]
    end

    def show
        user_plan = UserPlan.all 
        render json: user_plan
    end

end
