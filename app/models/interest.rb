class Interest < ApplicationRecord
     # validates :name, uniqueness: true
     has_many :dog_interests, dependent: :destroy
     has_many :dogs, through: :dog_interests

end
