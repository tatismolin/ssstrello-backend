class User < ApplicationRecord
    has_many :userPlans
    has_many :plans, through: :userPlans

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 7}
end