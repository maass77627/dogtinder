class Comment < ApplicationRecord
    belongs_to :user
    attr_accessor :replies
    attr_accessor :parent_id

   
    belongs_to :parent, class_name: 'Comment', optional: true
    has_many :replies, class_name: 'Comment', foreign_key: 'parent_id', dependent: :destroy
  
    validates :context, presence: true
   
  
end
