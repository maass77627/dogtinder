class User < ApplicationRecord
    # validates :name, presence: true, uniqueness: true;
     validates :username, presence: true, uniqueness: true
    

    has_secure_password
    has_many :user_dogs
    has_many :dogs, through: :user_dogs
    has_many :comments
end
