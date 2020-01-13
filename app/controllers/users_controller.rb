class UsersController < ApplicationController

before_action :find_user, only: [:show, :update, :destroy]

    def index
        @users = User.all 
        render json: @users, include: {plans: {:include => :lists}}
    end

    def create
        @user = User.create(allowed_params)
        if @user.save
            render status: :created
        else
            render json: {error: "Bad user"}, status: :bad_request
        end
    end

    def show
        render json: @user
    end

    def update
        @user.update(allowed_params)
    end

    def destroy
        @user.delete
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def allowed_params
        params.permit(:username, :password)
    end

end
