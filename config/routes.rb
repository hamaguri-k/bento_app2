Rails.application.routes.draw do
  resources :shifts do
    collection do
      post :reset_shifts
      post :shift_assign
    end
  end
  resources :results
end
