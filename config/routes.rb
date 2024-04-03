Rails.application.routes.draw do
  scope "api" do
  resources :customer, only: [:index, :show, :create]
  resources :pharmacies
  resources :payments
  resources :invoices
  resources :order_items
  resources :orders
  resources :medication, only: [:index, :show, :create]
  end
  
  get "/api/current_user", to:"customer#current_user"
  post '/api/login', to: 'session#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
