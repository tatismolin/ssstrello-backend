# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

plan1 = Plan.create(name: "Home")

list1 = List.create(name: "To Do")
list2 = List.create(name: "Doing")
list3 = List.create(name: "Done")

PlanList.create(plan_id: plan1.id, list_id: list1.id)
PlanList.create(plan_id: plan1.id, list_id: list2.id)
PlanList.create(plan_id: plan1.id, list_id: list3.id)






