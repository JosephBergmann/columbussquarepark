class RemoveConnectionToOrganizersFromEvents < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :organizer_id
  end
end
