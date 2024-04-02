json.extract! order, :id, :CustomerId, :orderDate, :totalAmount, :status, :created_at, :updated_at
json.url order_url(order, format: :json)
