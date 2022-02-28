class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :listing_id, null:false
      t.integer :total_price, null:false
      t.integer :total_guests, null:false
      t.integer :guest_id,null:false
      t.string :nights, null:false
      t.date :check_in, null:false
      t.date :check_out, null:false
      
      t.timestamps
    end
    add_index :reservations,:guest_id
    add_index :reservations, :listing_id
  end
end
