class CommentSerializer < ActiveModel::Serializer


  
  attributes :id, :context, :parent_id, :user_id
  belongs_to :user
  has_many :replies
 
  
end
