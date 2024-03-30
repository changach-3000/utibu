class CreateMedications < ActiveRecord::Migration[7.0]
  def change
    create_table :medications do |t|
      t.string :medicationName
      t.string :medicationDesc
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
