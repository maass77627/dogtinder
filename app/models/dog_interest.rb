class DogInterest < ApplicationRecord
  validates :name, uniqueness: true
  belongs_to :dog
  belongs_to :interest
end
