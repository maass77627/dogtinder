class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_id, :dog, :user
end
