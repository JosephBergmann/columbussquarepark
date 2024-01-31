class MakeDescriptionText < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :description, :text
  end
end
