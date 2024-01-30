class AddLocationToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :location, :string
    remove_index :organizers, :email
    add_index :organizers, :email, unique: true
  end
end
