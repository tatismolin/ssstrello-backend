class CreatePlanLists < ActiveRecord::Migration[6.0]
  def change
    create_table :plan_lists do |t|
      t.references :plan, null: false, foreign_key: true
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
