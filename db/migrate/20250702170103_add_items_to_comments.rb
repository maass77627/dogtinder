class AddItemsToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :items, :string, array: true, default: []
    
  end
end
