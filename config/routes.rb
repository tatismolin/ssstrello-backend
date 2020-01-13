Rails.application.routes.draw do
  resources :user_plans
  resources :users, only: [:create]
  post "login", to: "authentication#login"
  resources :tasks
  resources :lists
  resources :plans
end
