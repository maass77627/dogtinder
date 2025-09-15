class RemoveDogIdFromReplies < ActiveRecord::Migration[6.1]
  def change
    remove_column :replies, :dog_id, :integer 
  end
end
