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
end
