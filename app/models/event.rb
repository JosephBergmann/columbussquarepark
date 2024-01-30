class Event < ApplicationRecord
    validates :name, :full, :date, null: false
    
end
