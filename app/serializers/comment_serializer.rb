class CommentSerializer < ActiveModel::Serializer


  # attributes :id, :context, :user_id, :dog_id, :items, :parent
  # attributes :id, :context, :user_id, :items, :parent
  attributes :id, :context, :parent_id, :user_id
  belongs_to :user
  # belongs_to :dog

  
end
