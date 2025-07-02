class CommentSerializer < ActiveModel::Serializer
  attributes :id, :context, :title, :user_id, :dog_id, :items
  belongs_to :user
  belongs_to :dog
end
