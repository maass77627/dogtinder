class Like < ApplicationRecord
    validates :name, uniqueness: true
    validates :user_id, uniqueness: { scope: :dog_id }
    belongs_to :user
    belongs_to :dog
end
