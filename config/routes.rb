Rails.application.routes.draw do
  resources :reviews, only:[:index, :create, :destroy]
  resources :events, only:[:index,:show, :create]
  resources :users, only:[:index,:show, :create, :destroy]

  get '/event_reviews', to: 'reviews#event_reviews'
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
