class AddIndicesToEventsAndOrganizers < ActiveRecord::Migration[7.0]
  def change
    add_index :organizers, :name
    add_index :organizers, :email
  end
end
