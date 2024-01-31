json.event do
    json.extract! @event, :id, :name, :description, :date, :location
end