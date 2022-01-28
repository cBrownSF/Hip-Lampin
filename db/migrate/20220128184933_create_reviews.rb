class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id,null:false
      t.integer :listing_id,null:false
      t.string :description,null:false
      t.string :title,null:false
      t.boolean :recommends,null:false
      t.integer :helpful,null:false
      t.timestamps
    end
    add_index :reviews,:author_id,unique:true
    add_index :reviews,:listing_id,unique:true
  end
end
