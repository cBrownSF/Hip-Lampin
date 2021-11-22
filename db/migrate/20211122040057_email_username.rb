class EmailUsername < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :email, :string, unique: true
    remove_column :users, :username, :string
  end
end
