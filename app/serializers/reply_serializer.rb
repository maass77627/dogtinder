class ReplySerializer < ActiveModel::Serializer
  # attributes :id, :context, :user_id, :dog_id, :parent
  attributes :id, :context, :user_id, :dog_id, :comment_id
end
