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

plan1 = Plan.create(name: "Create A Task Management Tool")

backlog = List.create(name: "Backlog", plan: plan1)
todo = List.create(name: "To Do", plan: plan1)
inProgress = List.create(name: "In Progress", plan: plan1)
done = List.create(name: "Done", plan: plan1)

Task.create(name: "Set up Rails BE", priority: "High", list: todo)
Task.create(name: "Seed some test data", priority: "High", list: todo)
Task.create(name: "Display API data in browser", priority: "High", list: todo)
Task.create(name: "Create FE for the Plan", priority: "High", list: todo)
Task.create(name: "Create FE for the Lists", priority: "High", list: todo)
Task.create(name: "Create FE for the Tasks", priority: "High", list: todo)
Task.create(name: "Create FE for add-new-task", priority: "High", list: todo)
Task.create(name: "Create BE for add-new-task", priority: "High", list: todo)
Task.create(name: "Create FE for delete-a-task", priority: "High", list: todo)
Task.create(name: "Create BE for delete-a-task", priority: "High", list: todo)
Task.create(name: "Create FE for edit-a-task", priority: "High", list: todo)
Task.create(name: "Create BE for edit-a-task", priority: "High", list: todo)
Task.create(name: "Create FE for drag-and-drop", priority: "Low", list: todo)
Task.create(name: "Create BE for drag-and-drop", priority: "Low", list: todo)


