class Interest < ApplicationRecord
     validate :name_must_be_one_word
     has_many :dog_interests
     has_many :dogs, through: :dog_interests
    # belongs_to :dog

end
