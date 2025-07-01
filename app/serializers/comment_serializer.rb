class CommentSerializer < ActiveModel::Serializer
  attributes :id, :context, :title, :user_id, :dog_id
  belongs_to :user
  belongs_to :dog
end
