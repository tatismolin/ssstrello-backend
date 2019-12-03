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

plan1 = Plan.create(name: "Create A Task Management Tool")
# plan2 = Plan.create(name: "Plan2")

UserPlan.create(user_id: user1.id, plan_id: plan1.id)
UserPlan.create(user_id: user2.id, plan_id: plan1.id)

plan1list1 = List.create(name: "To Do", plan: plan1)
plan1list2 = List.create(name: "In Progress", plan: plan1)
plan1list3 = List.create(name: "Done", plan: plan1)

# plan2list1 = List.create(name: "To Do", plan: plan2)
# plan2list2 = List.create(name: "In Progress", plan: plan2)
# plan2list3 = List.create(name: "Done", plan: plan2)

task1 = Task.create(name: "Set up Rails BE", priority: "High", list: plan1list3)
task2 = Task.create(name: "Seed some test data", priority: "High", list: plan1list3)
task3 = Task.create(name: "Display API data in browser", priority: "High", list: plan1list3)
task4 = Task.create(name: "Create FE for the Plan", priority: "High", list: plan1list3)
task5 = Task.create(name: "Create FE for the Lists", priority: "High", list: plan1list3)
task7 = Task.create(name: "Create FE for the Tasks", priority: "High", list: plan1list3)
task8 = Task.create(name: "Create FE for add-new-task", priority: "High", list: plan1list2)
task9 = Task.create(name: "Create BE for add-new-task", priority: "High", list: plan1list1)
task10 = Task.create(name: "Create FE for delete-a-task", priority: "High", list: plan1list1)
task11 = Task.create(name: "Create BE for delete-a-task", priority: "High", list: plan1list1)
task12 = Task.create(name: "Create FE for edit-a-task", priority: "High", list: plan1list3)
task13 = Task.create(name: "Create BE for edit-a-task", priority: "High", list: plan1list3)
task14 = Task.create(name: "Create FE for drag-and-drop", priority: "Low", list: plan1list3)
task15 = Task.create(name: "Create BE for drag-and-drop", priority: "Low", list: plan1list3)

# task7 = Task.create(name: "Do Something Else", priority: 2, list: plan2list1)

