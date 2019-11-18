class ListsController < ApplicationController

    def index
        lists = List.all 
        render json: lists, include: [:tasks]
    end

    def show
        list = List.all 
        render json: list
    end

end
