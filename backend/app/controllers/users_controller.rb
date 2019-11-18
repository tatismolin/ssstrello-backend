class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users, include: [:plans]
    end

    def show
        user = User.all 
        render json: user
    end

end
