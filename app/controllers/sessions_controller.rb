class SessionsController < ApplicationController
skip_before_action :authorized

  def get_current_user
    render json: { user: current_user, user_ingredients: current_user.user_ingredients, ingredients: current_user.ingredients, all_ingredients: Ingredient.all, token: @token }
  end

  def login   
		@user = User.find_by(username: params[:username])
		if @user && @user.authenticate(params[:password])
			@token = encode_token({ user_id: @user.id })
			render json: { user: @user, user_ingredients: @user.user_ingredients, ingredients: @user.ingredients, all_ingredients: Ingredient.all, token: @token }, status: :ok
		else
			render json: { errors: ["Username and password doesn't match"] }, status: :unprocessable_entity
		end
	end

end