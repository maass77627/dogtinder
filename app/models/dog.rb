

class Dog < ApplicationRecord
    belongs_to :user
   #  belongs_to :user
   has_many :comments
   has_many :likes
    
end
