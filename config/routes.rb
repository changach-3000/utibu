Rails.application.routes.draw do
  resources :customer, only: [:index, :show, :create]
  resources :pharmacies
  resources :payments
  resources :invoices
  resources :order_items
  resources :orders

  get "/current_user", to:"customer#current_user"
  post '/login', to: 'session#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
