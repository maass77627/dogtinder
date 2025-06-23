

class Dog < ApplicationRecord
   # has_many :user_dogs
   # has_many :users, through: :user_dogs
   # belongs_to :user
   has_many :comments
   has_many :likes
    
end
