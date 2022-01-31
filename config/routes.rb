Rails.application.routes.draw do
  resources :user_ingredients
  resources :ingredients
  resources :users do
    resources :user_ingredients, only: [:index, :show, :create]
  end


  get "/get-current-user" => "sessions#get_current_user"
  post "/login" => "sessions#login"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
