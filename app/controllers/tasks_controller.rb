class TasksController < ApplicationController

    before_action :find_task, only: [:show, :update, :destroy]

    def index
        @tasks = Task.all 
        render json: @tasks
    end

    def create
        @task = Task.create(allowed_params)
        render json: @task
    end

    def show
        render json: @task
    end

    def update
        @task.update(allowed_params)
    end

    def destroy
        @task.delete
    end

    private

    def find_task
        @task = Task.find(params[:id])
    end

    def allowed_params
        params.require(:task).permit(:name, :priority, :list_id)
    end

end
