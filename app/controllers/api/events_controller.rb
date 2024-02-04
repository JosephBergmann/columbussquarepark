class Api::EventsController < ApplicationController

    before_action :require_logged_in, only:[:create, :update, :destroy]
    def index
        @events = Event.all
        render :index
    end

    def create
        @event = Event.new(event_params)

        if !@event.full
            @event.full = false
        end

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
            render json: {id: params[:id]}
        else
            render json: {message: 'Event not found'}
        end
    end
    private
    def event_params
        params.require(:event).permit(:name, :description, :full, :date, :time, :location)
    end
end
