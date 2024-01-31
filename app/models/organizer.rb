class Organizer < ApplicationRecord
    validates :name, :email, presence: true
end
