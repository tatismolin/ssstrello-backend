Rails.application.routes.draw do
  resources :user_plans
  resources :users
  resources :tasks
  resources :lists
  resources :plans
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
