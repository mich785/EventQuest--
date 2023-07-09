class UsersController < ApplicationController
    def index
        user = User.all
        render json:user, status: :ok
    end

    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
  end
  
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        user = User.find_by(id:params[:id])
        user.destroy
        head :no_content
      end
    
      private
       def user_params
        params.permit(:username, :password, :password_confirmation, :email)
       end
end
