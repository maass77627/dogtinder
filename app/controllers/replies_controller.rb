class RepliesController < ApplicationController
    
    def index
        replies = Reply.all
        render json: replies
    end

    def create
        reply = Reply.create(reply_params)
         if comment.save
        render json: reply
         else
        render json: { errors: reply.errors.full_messages }, status: :unprocessable_entity
         end
    end

    def show
        reply = Reply.find_by(id: params[:id])
        render json: reply
    end

    def destroy
        reply = Reply.find_by(id: params[:id])
        if reply
            reply.destroy
            head :no_content
        else
            render json: {error: "Comment not Found"}, status: :not_found
        end

    end

    private
    def reply_params
    params.require().permit(:context, :user_id, :items, :user, :comment, :parent, :reply)

    end
end
