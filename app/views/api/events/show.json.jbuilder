json.event do
    json.extract! @event, :id, :name, :description, :date, :time, :location
end
