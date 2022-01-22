class Location < ActiveRecord::Migration[5.2]
  def change
    add_column :listings,:street_address, :string
    add_column :listings,:state, :string
    add_column :listings,:city, :string
    add_column :listings,:zip_code, :string
    add_column :listings,:country, :string
  end
end
