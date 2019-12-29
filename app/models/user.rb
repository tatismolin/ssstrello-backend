class User < ApplicationRecord
    has_many :userPlans
    has_many :plans, through: :userPlans
end
