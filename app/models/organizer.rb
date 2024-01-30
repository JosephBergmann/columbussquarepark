class Organizer < ApplicationRecord
    validates :name, :email, presence: true
    has_many :events
end
