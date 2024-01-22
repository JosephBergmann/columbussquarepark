class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.text :alttext
      t.references :poster, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
