

class Dog < ApplicationRecord
   validates :name, presence: true, uniqueness: true;
   validates :image, presence: true 
   belongs_to :user
   has_many :comments
   has_many :likes
   has_many :dog_interests
   has_many :interests, through: :dog_interests
   # has_many :interests
   accepts_nested_attributes_for :dog_interests


end
