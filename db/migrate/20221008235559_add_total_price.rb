class AddTotalPrice < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :total_price, :string, null:false
  end
end
