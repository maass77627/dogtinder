class UserDogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_id
end
