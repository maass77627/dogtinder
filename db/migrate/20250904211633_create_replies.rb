class CreateReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :replies do |t|
      t.string :context
      t.integer :user_id
      t.integer :dog_id
      t.integer :parent

      t.timestamps
    end
  end
end
