json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :name, :description, :full, :date, :time, :location
        end
    end
end
