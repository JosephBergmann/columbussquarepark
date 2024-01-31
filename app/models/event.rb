class Event < ApplicationRecord
    validates :name, :date, presence: true 
end
