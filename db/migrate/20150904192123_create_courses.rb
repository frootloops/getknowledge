class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :internal_id
      t.integer :discipline_id

      t.timestamps null: false
    end
  end
end
