class RemoveItemsFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :items
  end
end
