class User < ApplicationRecord
    validates :name, presence: true, uniqueness: true;
    validates :image, presence: true
    enum role: [:buyer, :owner, :not_set]
    validates :username, presence: true, uniqueness: true
    
    
    has_secure_password
    has_many :dogs
    has_many :comments
    has_many :likes
end
