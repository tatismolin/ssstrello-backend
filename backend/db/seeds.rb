# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Plan.destroy_all
UserPlan.destroy_all
List.destroy_all
Task.destroy_all


user1 = User.create(name: "Tanya", username: "tatismolin", password: "123tasm")
user2 = User.create(name: "Pasha", username: "pysmooth", password: "123pasm")

plan1 = Plan.create(name: "Plan a vacation")
# plan2 = Plan.create(name: "Plan2")

UserPlan.create(user_id: user1.id, plan_id: plan1.id)
UserPlan.create(user_id: user2.id, plan_id: plan1.id)

plan1list1 = List.create(name: "To Do", plan: plan1)
plan1list2 = List.create(name: "In Progress", plan: plan1)
plan1list3 = List.create(name: "Done", plan: plan1)

# plan2list1 = List.create(name: "To Do", plan: plan2)
# plan2list2 = List.create(name: "In Progress", plan: plan2)
# plan2list3 = List.create(name: "Done", plan: plan2)

task1 = Task.create(name: "Pick dates", priority: 1, list: plan1list3)
task2 = Task.create(name: "Pick destination", priority: 1, list: plan1list3)
task3 = Task.create(name: "Book flights", priority: 1, list: plan1list2)
task4 = Task.create(name: "Book hotel", priority: 1, list: plan1list2)
task5 = Task.create(name: "Research activities", priority: 1, list: plan1list1)
task6 = Task.create(name: "Pack for the trip", priority: 1, list: plan1list1)


# task2 = Task.create(name: "Do Something Else", priority: 2, list: plan2list1)

