class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null:false
      t.string :name, null:false
      t.string :description,null:false
      t.string :cost, null:false
      t.string :check_in_time, null:false
      t.string :check_out_time, null:false
      t.string :response_time, null:false
      t.string :on_arrival, null:false
      t.integer :guests_allowed, null:false
      t.integer :minimum_night, null:false
      t.string :cancellation_policy, null:false
      t.string :booking_time, null:false
      t.boolean :is_fishing
      t.boolean :is_swimming
      t.boolean :is_hiking
      t.boolean :is_paddling
      t.boolean :is_wildlife
      t.boolean :is_trash,null:false
      t.boolean :is_kitchen, null:false
      t.boolean :is_shower,null:false
      t.boolean :is_wifi,null:false
      t.boolean :is_picnic_table, null:false
      t.boolean :is_toilet, null:false
      t.boolean :is_campfire_allowed,null:false
      t.timestamps
    end
    add_index :listings,:host_id, unique: true
  end
end
