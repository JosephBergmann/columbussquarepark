class CreateOrganizers < ActiveRecord::Migration[7.0]
  def change
    create_table :organizers do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone
      t.string :organization
      t.timestamps
    end
  end
end
