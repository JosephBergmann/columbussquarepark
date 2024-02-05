Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :update]
    resource :session, only: [:create, :show, :destroy]


    resources :images, only: [:create, :destroy, :update, :index, :show]
    resources :events, only: [:create, :destroy, :update, :index, :show]
    # resources :organizers

  end

  get '/api/getAllData', to: "static_pages#get_all_data"
  get '*path', to: "static_pages#frontend_index"
end
