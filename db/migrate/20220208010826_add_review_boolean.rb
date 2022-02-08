class AddReviewBoolean < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :helped, :boolean
  end
end
