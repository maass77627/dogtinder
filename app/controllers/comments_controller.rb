class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end



#    def update
#     comment = Comment.find_by(id: params[:id])
#     newcomment = Comment.create(comment_params)
#      newcomment.save
#     comment.items << newcomment
#     # byebug
#      if comment.save
#      render json: comment
#      else
#          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
#      end
#    end


   
    def create
        comment = Comment.create(comment_params)
         if comment.save
        render json: comment 
         else
        render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
         end
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: comment
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.destroy
            head :no_content
        else
            render json: {error: "Comment not Found"}, status: :not_found
        end

    end

    private

    def comment_params
        # params.permit(:context, :user_id, :dog_id, :items, :user, :comment, :parent)
        params.permit(:context, :user_id, :items, :user, :comment, :parent)
end
end
