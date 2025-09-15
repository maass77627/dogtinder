

class RemoveUserIdFromReplies < ActiveRecord::Migration[6.1]
  def change
   remove_column :replies, :user_id, :integer
  end
end
