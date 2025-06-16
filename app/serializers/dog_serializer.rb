class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :interests, :details, :image

  has_many :dogs
end
