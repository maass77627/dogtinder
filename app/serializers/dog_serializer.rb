class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :interests, :details, :image, :user_id

  # has_many :users
end
