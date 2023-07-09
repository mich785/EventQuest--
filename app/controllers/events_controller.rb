class EventsController < ApplicationController
    def index
        events = Event.all 
        # if session[:user_id].present?
            render json: events ,status: :ok
        # else
        #     render json: { errors: "Unauthorized"}, status: :unauthorized
        # end
    end
#Delete unwanted data from db
    # def destroy
    #     event= Event.find_by(id:params[:id])
    #     if event
    #         event.reviews.destroy_all
    #         event.delete
    #         head :no_content
    #     else
    #         render json:{error:"Event not found"}
    #     end
    # end
end
