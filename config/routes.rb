Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :benches, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
  end
end
