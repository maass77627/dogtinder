class CommentSerializer < ActiveModel::Serializer


  # attributes :id, :context, :user_id, :dog_id, :items, :parent
  attributes :id, :context, :user_id, :items, :parent
  belongs_to :user
  # belongs_to :dog

  
end
