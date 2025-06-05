class UserDogsController < ApplicationController
    belongs_to :user
    belongs_to :dog
end
