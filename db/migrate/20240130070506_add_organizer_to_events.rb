class AddOrganizerToEvents < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :organizer, foreign_key: {to_table: :organizers}
  end
end
