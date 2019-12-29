class Plan < ApplicationRecord
    has_many :lists
    has_many :userPlans
    has_many :users, through: :userPlans
end
