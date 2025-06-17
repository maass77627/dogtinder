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

    # def index
    #     dogs = Dog.all
    #     render json: dogs 
    # end

    def create
        if params[:user_id]
            user = User.find(params[:user_id])
            dog =  user.dogs.new(dog_params)
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
        params.permit(:name, :age, :interests, :details, :image)


    end

end
