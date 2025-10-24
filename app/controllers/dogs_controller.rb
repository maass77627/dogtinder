
class DogsController < ApplicationController

    
  

    def index
        if params[:user_id]
          user = User.find(params[:user_id])
          dogs = user.dogs
        else
          dogs = Dog.all
        end
        render json: dogs, include: [:user, :interests]
    end 


    def update
        dog = Dog.find(params[:id])
    # byebug
        if dog.update(dog_params)
          render json: dog, include: :interests, status: :ok
        else
          render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
        end
      end
      

    def create
        if params[:user_id]
            user = User.find(params[:user_id])
            dog =  user.dogs.new(dog_params)
            dog.save
        else
        dog = Dog.create!(params)
        end
        render json: dog
    end

    def show
        dog = Dog.find_by(id: params[:id])
        render json: dog
    end

    def destroy
        dog = Dog.find_by(id: params[:id])
        if dog
            dog.destroy
            head :no_content
        else
            render json: { error: "Dog not found"}, status: :not_found
        end
    end

    private

    def dog_params
        params.require(:dog).permit(
      :id,
      :name,
      :age,
      :details,
      :image,
      :user_id,
      :gender,
      :lookingfor,
      interest_ids: [] 
    )
        params.require(:dog).permit(:id, :name, :age, :details, :image, :user_id, :gender, :lookingfor, interest_ids: [])   
    end

end
