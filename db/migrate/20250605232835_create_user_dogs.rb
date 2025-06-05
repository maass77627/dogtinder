class CreateUserDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :user_dogs do |t|
      t.integer :user_id
      t.integer :dog_id

      t.timestamps
    end
  end
end
