class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :context
      t.string :title
      t.integer :user_id
      t.integer :dog_id

      t.timestamps
    end
  end
end
