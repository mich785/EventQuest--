class EventsController < ApplicationController
    def index
        events = Event.all 
        if session[:user_id].present?
            render json: events ,status: :ok
        else
            render json: { errors: "Unauthorized"}, status: :unauthorized
        end
    end
end
