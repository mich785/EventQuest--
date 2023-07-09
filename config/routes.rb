Rails.application.routes.draw do
  resources :reviews, only:[:index, :create, :destroy, :update]
  resources :events, only:[:index]
  resources :users, only:[:index,:show, :create, :destroy]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
