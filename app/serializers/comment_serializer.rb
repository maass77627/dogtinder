class CommentSerializer < ActiveModel::Serializer
  attributes :id, :context, :title, :user_id
end
