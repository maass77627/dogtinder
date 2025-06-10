Rails.application.routes.draw do
  
  resources :users
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
  resources :dogs
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
