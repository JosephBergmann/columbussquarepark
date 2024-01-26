class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|

      t.string :name, null: false, index: true
      t.string :description, index: true
      t.boolean :full, null: false, index: true
      t.date :date, null: false

      t.timestamps
    end
  end
end
