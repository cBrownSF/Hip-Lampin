class UpdateResTable < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :total_guests, :string, null: false
    remove_column :reservations, :total_price
  end
end
