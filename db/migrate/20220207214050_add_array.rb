class AddArray < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :helpful_authors, :integer,array: true, default: []
  end
end
