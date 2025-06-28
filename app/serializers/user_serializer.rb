class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :role
  # has_many :dogs
end
