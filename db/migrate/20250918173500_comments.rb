class Comments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :context
      t.integer :user_id
      t.references :parent, foreign_key: { to_table: :comments }, index: true # Self-referential association
      t.timestamps

  end
end
end