class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :interests, :details, :image, :user_id, :gender, :interestedin

  # has_many :users
  has_many :interests
end
