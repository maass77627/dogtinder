class Interest < ApplicationRecord
     has_many :dog_interests
     has_many :dogs, through: :dog_interests
    # belongs_to :dog

end
