class TasksController < ApplicationController

    def index
        tasks = Task.all 
        render json: tasks
    end

    def show
        task = Task.all 
        render json: task
    end

end
