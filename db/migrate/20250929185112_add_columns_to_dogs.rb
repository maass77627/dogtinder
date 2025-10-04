class AddColumnsToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :gender, :string
    add_column :dogs, :interestedin, :string
    add_column :dogs, :lookingfor, :string
  end
end
