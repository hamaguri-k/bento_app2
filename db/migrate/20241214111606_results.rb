class Results < ActiveRecord::Migration[7.0]
  def change
    create_table :results do |t|
      t.string :day, null: false 
      t.string :name 
      t.references :shift, foreign_key: true

      t.timestamps
    end
  end
end
