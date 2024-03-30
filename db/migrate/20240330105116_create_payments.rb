class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :invoice_id
      t.integer :amount
      t.datetime :paymentDate
      t.string :paymentMethod

      t.timestamps
    end
  end
end
