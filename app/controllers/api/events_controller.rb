class Api::EventsController < ApplicationController
    def index
        @events = Event.all
    end
    
    def create
        @event = Event.new(event_params)

        if @event.save
            render :show
        else
            render json: {errors: @event.errors.full_messages}
        end
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def update
        @event = Event.find(params[:id])

        if !@event
            render json: {message: 'Event not found'}
        end

        if @event.update(event_params)
            render :show
        else
            render json: {errors: @event.errors.full_messages}
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event
            @event.destroy
        else
            render json: {message: 'Event not found'}
        end
    end
    private
    def event_params
        params.require(:name, :description, :full, :date, :location)
    end
end
