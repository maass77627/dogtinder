class User < ApplicationRecord
    has_secure_password
    has_many :user_dogs
    has_many :dogs, through: :user_dogs
    has_many :comments
end
