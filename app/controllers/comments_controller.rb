class CommentsController < ApplicationController

    def index
        comments = Comment.all
        # sorted_comments = sort_comments(comments)
        render json: comments
    end


    # def sort_comments(comments)
    #    parents = comments.select{ |c| c.parent_id.nil? }
    #    children = comments.group_by(&:parent_id)

    #    ordered = []
    #    parents.each do |parent|
    #     parent.depth = 0 
    #     ordered << parent
    #     ordered.concat(fetch_children(parent.id, children, 1))
    #    end

    #    ordered
    # end

    # def fetch_children(parent_id, children_hash, depth)
    #     return [] unless children_hash[parent_id]

    #     children_hash[parent_id].flat_map do |child|
    #         child.depth = depth
    #         [child] + fetch_children(child.id, children_hash, depth+1) 
    #     end
    # end

    # # def parent_with_depth(comment, depth)
    # #    comment.depth = depth
    # #    comment
    # # end
    

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
        params.require(:comment).permit(:context, :user_id, :user, :parent_id)
end
end
