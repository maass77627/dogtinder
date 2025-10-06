class DogSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :age, :details, :image, :user_id, :gender, :lookingfor

  belongs_to :user
  has_many :interests
end
