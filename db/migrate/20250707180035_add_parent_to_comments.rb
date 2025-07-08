class AddParentToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :parent, :integer
  end
end
