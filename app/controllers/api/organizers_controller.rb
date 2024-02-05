class Api::OrganizersController < ApplicationController
    def create
        @organizer = Organizer.new(organizer_params)
        if @organizer.save
            render json: {message: 'new organizer saved successfully'}
        else
            render json: {errors: @organizer.errors.full_messages}
        end
    end
    
    private
    def organizer_params
        params.require(:name, :email, :phone, :organization)
    end
end
