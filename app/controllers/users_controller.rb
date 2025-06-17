class UsersController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index]

    def index
        users = User.all
        render json: users
        #  render json: users, include: dogs
        # render json: reviews, include: :dog_house
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


    

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user
        else 
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)

    end

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id

    # end



end
