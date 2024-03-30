class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :fullName
      t.string :password_digest
      t.string :phoneNumber
      t.string :address
      t.boolean :is_admin, default: false

      t.timestamps
    end
  end
end
