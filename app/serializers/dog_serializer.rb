class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :interests, :details, :image
end
