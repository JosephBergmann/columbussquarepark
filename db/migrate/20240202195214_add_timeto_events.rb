class AddTimetoEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :time, :time
  end
end
