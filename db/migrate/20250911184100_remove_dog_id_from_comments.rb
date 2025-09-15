class RemoveDogIdFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :dog_id, :integer
     end
end
