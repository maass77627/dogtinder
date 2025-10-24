# class UserSerializer < ActiveModel::Serializer
#   attributes :id, :username, :password_digest, :name, :role, :bio, :image
  
# end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :role, :bio, :image
end