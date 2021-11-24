class DefaultValueBoolean < ActiveRecord::Migration[5.2]
  def change
    change_column :listings, :is_trash, :boolean, default: false
  end
end
