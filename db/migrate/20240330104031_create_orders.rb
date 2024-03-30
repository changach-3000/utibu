class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.datetime :orderDate
      t.integer :totalAmount
      t.boolean :status

      t.timestamps
    end
  end
end
