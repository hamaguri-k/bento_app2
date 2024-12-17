class ShiftAdjustment < ActiveRecord::Migration[7.0]
  def change
    create_table :shifts do |t|
      t.string :name, null: false
      t.boolean :monday, null: false, default: false
      t.boolean :tuesday, null: false, default: false
      t.boolean :wednesday, null: false, default: false
      t.boolean :thursday, null: false, default: false
      t.boolean :friday, null: false, default: false

      t.timestamps
    end
  end
end
