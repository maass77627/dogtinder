Rails.application.routes.draw do
  
  
    resources :users, only: [:show] do 
    resources :dogs, only: [:show, :index, :create]
  end

  
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"


   resources :comments
   resources :likes
   resources :dogs
   resources :users
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
