class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:create, :update]
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        end
    end

    def show
    end

    def destroy
    end

    def update
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
