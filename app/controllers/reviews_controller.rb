class ReviewsController < ApplicationController
    def index
        reviews = Review.all 
        if session[:user_id].present?
            render json: reviews, include: :event
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    
end
