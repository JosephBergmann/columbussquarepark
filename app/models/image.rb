class Image < ApplicationRecord
    validates :url, unique: true

    belongs_to :poster
end
