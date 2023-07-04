class User < ApplicationRecord
    has_many :reviews
    has_secure_password

    validates :username, presence: true, uniqueness: true 
    validates :email ,presence: true
    validates :password_digest ,presence: true, length: { minimum: 6, maximum: 20 }
end
