class Plan < ApplicationRecord
    has_many :plan_lists
    has_many :lists, through: :plan_lists
end
