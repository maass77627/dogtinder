Rails.application.routes.draw do
  
  
    resources :user_dogs
    resources :owners
    resources :users, only: [:show] do 
    resources :dogs, only: [:show, :index, :create]
  end
  # patch "comments/:id/reply", to: "comments#reply"  
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"


   resources :comments
  #  resources :comments do
  #   member do
  #     post :add_reply
  #   end
  # end


   resources :likes
   resources :dogs
   resources :users
end
