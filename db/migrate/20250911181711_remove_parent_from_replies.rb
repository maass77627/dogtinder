class RemoveParentFromReplies < ActiveRecord::Migration[6.1]
  def change
    remove_column :replies, :parent, :integer 
  end
end
