class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
    end

#     def add_reply
#     comment = Comment.find(params[:id])
#     reply = comment_params
    
#     comment.items ||= [] 
#     comment.items << reply
#     # byebug
#     if comment.save
#       render json: { message: 'Reply added successfully', comment: comment }, status: :ok
#     else
#       render json: { error: 'Failed to add reply', details: comment.errors.full_messages }, status: :unprocessable_entity
#     end
#   end

# def reply
#     comment = Comment.find_by(id: params[:id])
#     # Permit specific parameters from newitem and convert to a plain hash
#     reply_params = comment_params.to_h
#     comment.items << reply_params
#     if comment.save
#       render json: comment
#     else
#       render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
#     end
#         end


   
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
        params.permit(:context, :user_id, :dog_id, :items, :user, :id, :comment, :parent)

    end
end
