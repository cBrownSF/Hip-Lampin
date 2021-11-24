class RemoveNullonHost < ActiveRecord::Migration[5.2]
  def change
    change_column :listings, :host_id, :integer, unique: false
  end
end
