class PlanListsController < ApplicationController

    def index
        planLists = PlanList.all 
        render json: planLists, include: [:list]
    end

    def show
        planList = PlanList.find_by(params[:id])
        render json: planList
    end

end
