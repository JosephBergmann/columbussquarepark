Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :update]
    resource :session, only: [:create, :show, :destroy]

    resources :images
    resources :events
    resources :organizers
  end
end
