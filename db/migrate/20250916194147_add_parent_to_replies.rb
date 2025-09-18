class AddParentToReplies < ActiveRecord::Migration[6.1]
  def change
    add_column :replies, :parent, :integer
  end
end
