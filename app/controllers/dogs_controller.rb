class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs 
    end

    def create
        dog = Dog.create!(dog_params)
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
