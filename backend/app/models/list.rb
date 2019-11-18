class List < ApplicationRecord
    has_many :plan_lists
    has_many :plans, through: :plan_lists
end
