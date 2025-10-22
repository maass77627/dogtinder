class InterestsController < ApplicationController

    def index
    interests = Interest.distinct
    render json: interests
    end

    def create
    interest = Interest.create(interest_params)
    if interest.save
        render json: :interest
    else 
        render json: { errors: interest.errors.full_messages }, status: :unprocessable_entity
    end
    end


private

def interest_params
    params.require(:interest).permit(:name)
end


end
