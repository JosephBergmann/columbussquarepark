json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :name, :description, :full, :date, :location
        end
    end
end