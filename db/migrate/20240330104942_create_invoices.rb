class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.integer :order_id
      t.integer :totalAmount
      t.datetime :invoiceDate

      t.timestamps
    end
  end
end
