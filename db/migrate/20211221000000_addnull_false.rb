class AddnullFalse < ActiveRecord::Migration[5.2]
  def change
     remove_column :listings, :lat, :float, null: false
     remove_column :listings, :lng, :float, null: false
  end
end
