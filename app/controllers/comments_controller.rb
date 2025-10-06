class CommentsController < ApplicationController


    def index
        comments = Comment.where(parent_id: nil).includes(:replies)
        render json: comments.as_json(include: { replies: { include: :replies } })
       
      end
    
 def create
        comment = Comment.create(comment_params)
         if comment.save
        render json: comment, status: :created 
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
        params.require(:comment).permit(:context, :user_id, :parent_id)
      end
    
  
end
