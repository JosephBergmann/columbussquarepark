class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]

    def show
        if current_user
            @user = current_user
            render 'api/users/show'
        else
            render json: {user: nil}
        end
    end

    def create
        @user = User.find_by_credentials(params[:email], params[:password])
        if @user
            login(@user)
            debugger
            render 'api/users/show'
        else
            render json: {errors: ['wrong email or password']}, status: :unauthorized
        end
    end

    def destroy
        logout
        render json: {message: 'logout successful'}
    end

end
