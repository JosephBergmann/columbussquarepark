class Api::EventsController < ApplicationController
    def create
        @event = Event.new(event_params)
        if @event.save
            render :show
        else
            render json: {errors: @event.errors.full_messages}
        end
    end
    
    private
    def event_params
        params.require(:name, :description, :full, :date, :organizer_email, :location)
    end
end
