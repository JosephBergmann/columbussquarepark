class Event < ApplicationRecord
    validates :name, :date, presence: true 
    belongs_to :organizer
end
