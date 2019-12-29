class UserPlansController < ApplicationController

    before_action :find_user_plan, only: [:user, :plan]

    def index
        @user_plans = UserPlan.all 
        render json: @user_plans, include: [:plan, :user]
    end

    def create
        @user_plan = UserPlan.create(allowed_params)
        render json: @user_plan
    end

    def show
        render json: @user_plan
    end

    def update
        @user_plan.update(allowed_params)
    end

    def destroy
        @user_plan.delete
    end

    private

    def find_user_plan
        @user_plan = UserPlan.find(params[:id])
    end

    def allowed_params
        params.require(:user_plan).permit(:user, :plan)
    end

end
