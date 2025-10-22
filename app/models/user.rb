class User < ApplicationRecord
    before_save :capitalize_name
    # validates :name, presence: true, uniqueness: true;
    # validates :image, presence: true
    enum role: [:buyer, :owner, :not_set]
    # validates :username, presence: true, uniqueness: true
    
    has_secure_password
    has_many :dogs
    has_many :comments
    has_many :likes

    private

    def capitalize_name
        self.name = name.titleize if name.present?
     
    end
end
