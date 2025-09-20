class CommentSerializer < ActiveModel::Serializer


  # attributes :id, :context, :user_id, :dog_id, :items, :parent
  # attributes :id, :context, :user_id, :items, :parent
  attributes :id, :context, :parent_id, :user_id, :user
  belongs_to :user
  has_many :replies
  # belongs_to :dog

  
end
