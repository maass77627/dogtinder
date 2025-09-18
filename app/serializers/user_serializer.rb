class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :role, :bio, :image
  # has_many :dogs
end
