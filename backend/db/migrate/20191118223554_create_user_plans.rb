class CreateUserPlans < ActiveRecord::Migration[6.0]
  def change
    create_table :user_plans do |t|
      t.references :user
      t.references :plan

      t.timestamps
    end
  end
end
