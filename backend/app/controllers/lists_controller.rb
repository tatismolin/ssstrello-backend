class ListsController < ApplicationController

    before_action :find_list, only: [:show, :update, :destroy]

    def index
        @lists = List.all 
        render json: @lists, include: [:tasks]
    end

    def create
        @list.create(allowed_params)
        render json: @list
    end

    def show
        render json: @list, include: [:tasks]
    end

    def update
        @list.update(allowed_params)
    end

    def destroy
        @list.delete
    end

    private

    def find_list
        @list = List.find(params[:id])
    end

    def allowed_params
        params.require(:list).permit(:name, :plan_id)
    end

end
