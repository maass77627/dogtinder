class LikesController < ApplicationController

        def index
             likes = Like.all
             render json: likes
        end

        def create
            like = Like.create(like_params)
          #   byebug
            if like.save
            render json: like
             else
            render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
             end
        end


        def destroy
             like = Like.find_by(id: params[:id])
             like.destroy
            head :no_content
         end

    private
    def like_params
        params.require(:like).permit(:dog_id, :user_id)
    end
    end
