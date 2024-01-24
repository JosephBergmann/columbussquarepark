class Api::ImagesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    def index

    end

    def create
        @image = Image.new(image_params)

        if @image.save
            render :show
        else
            render json: {errors: @image.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        @image = Image.find(params[:id])
    end

    def update
    end

    def destroy
        @image = Image.find(params[:id])
        if @image
            @image.destroy
            render :show
        else
            render json: {message: 'Unauthorized'}, status: :unathorized
            return
        end
    end

    private
    def image_params
        params.require(:image).permit(:url, :alttext, :poster_id)
    end
end
