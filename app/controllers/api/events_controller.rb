class Api::EventsController < ApplicationController
    private
    def event_params
        params.require(:name, :description, :full, :date, :organizer_email)
    end
end
