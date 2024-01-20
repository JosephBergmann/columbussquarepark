class AddUsernameAndEmailToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :username, :string, null: false, index: {unique: true}
    add_column :users, :email, :string,  null: false, index: {unique: true}
  end
end
