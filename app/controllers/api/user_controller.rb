class Api::UserController < ApplicationController

    before_action :require_logged_in, only: [:create, :update]
    def create

    end

    def destroy
    end

    def update
    end

    private
    def user_params
        params.require(:user).permit(:name, )
    end
end
