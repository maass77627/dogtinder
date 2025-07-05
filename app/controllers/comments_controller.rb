class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments

    end

    def update
        comment = Comment.find_by(id: params[:id])
        
        comment.items << comment_params
        byebug
        comment.save
        render json: comment


    end

    # def reply
    #     comment = Comment.find_by(id: params[:id])
    #     reply = comment_params
    #     comment.items << reply
    #     # byebug
    #     #  comment.save
    #      byebug
        
    #     render json: comment
    #     # byebug
    #     # comment.items << 


    # end

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
        params.permit(:context, :title, :user_id, :dog_id, :items, :user, :id, :comment)

    end
end
