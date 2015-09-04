class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.references :course, index: true, foreign_key: true
      t.references :section, index: true, foreign_key: true
      t.text :body
      t.text :answer

      t.timestamps null: false
    end
  end
end
