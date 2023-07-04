class ReviewsController < ApplicationController
    def index
        reviews = Review.all 
        if session[:user_id].present?
            render json: reviews ,status: :ok
        else
            render json: { errors: "Unauthorized"}, status: :unauthorized
        end
    end

    def create
        if session[:user_id].present?
          review = review.new(review_params)
          review.user_id = session[:user_id]
      
          if review.save
            render json: review, include: { user: { only: [:username, :image_url, :bio] } }, status: :created
          else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { errors: "Unauthorized"}, status: :unauthorized
        end
      end
      
end
