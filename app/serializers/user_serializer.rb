class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name
  # has_many :dogs
end
