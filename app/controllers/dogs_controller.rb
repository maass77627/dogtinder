
class DogsController < ApplicationController

    def index
        if params[:user_id]
          user = User.find(params[:user_id])
          dogs = user.dogs
        else
          dogs = Dog.all
        end
        render json: dogs, include: :user
    end 

      
      def update
        dog = Dog.find_by(id: params[:id])
        if dog
            dog.update(dog_params)
            render json: dog
        else
            render json: { error: "Dog not found"}, status: :not_found

        end
      end

   

    def create
        if params[:user_id]
            user = User.find(params[:user_id])
            dog =  user.dogs.new(dog_params)
            dog.save
        else
        dog = Dog.create!(dog_params)
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
        params.permit(:id, :name, :age, :interests, :details, :image, :user_id)
    end

end
