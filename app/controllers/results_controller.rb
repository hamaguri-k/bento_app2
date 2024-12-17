class ResultsController < ApplicationController
    def index
      results = Result.all

      render json: {
        results: results
      }, status: :ok
    end
end