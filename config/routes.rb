Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create,:update,:show]
    resource :session, only:[:create,:destroy,:show]
    resources :reviews, only: [:create,:update,:destroy]
    resources :listings, only: [:index, :show, :create,:update,:destroy]
    resources :reservations, only: [:create,:update,:destroy,:show]
  end
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end