class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments

    end

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

    private

    def comment_params
        params.permit(:context, :title, :user_id, :dog_id, :items, :user)

    end
end
