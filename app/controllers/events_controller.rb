class EventsController < ApplicationController
    def index
        events = Event.all 
        if session[:user_id].present?
            render json: events ,status: :ok
        else
            render json: { errors: "Unauthorized"}, status: :unauthorized
        end
    end
    def show
        event = Event.find_by(id:params[:id])
        if event
          render json: event
        else
          render json: { error: "Not Found" }, status: :not_found
        end
    end

    def create
        if session[:user_id].present?
          event = Event.create(event_params)
           
      
          if event
            render json: event,  status: :created
          else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { errors: "Unauthorized"}, status: :unauthorized
        end
      end

      def event_params
        params.permit(:name, :description, :category, :country, :place)
      end
end
