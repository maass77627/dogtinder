Rails.application.routes.draw do
  
  resources :interests
  resources :user_dogs
  # resources :owners
  resources :users, only: [:show] do 
  resources :dogs, only: [:show, :index, :create]
  end
 
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

   resources :replies
   resources :comments
   resources :likes
   resources :dogs
   resources :users
end
