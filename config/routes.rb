Rails.application.routes.draw do
  resources :shifts do
    collection do
      post :reset_shifts
    end
  end
  resources :results
end
