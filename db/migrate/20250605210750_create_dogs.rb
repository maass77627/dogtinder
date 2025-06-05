class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :interests
      t.string :details
      t.string :image

      t.timestamps
    end
  end
end
