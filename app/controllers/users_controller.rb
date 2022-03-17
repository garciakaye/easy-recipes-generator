class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  

  # GET /users
  def index
		@users = User.all
		render json: @users
	end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: @token }, status: :created
    else
      render json: { error: @user.errors.full_messages }, status: :not_acceptable
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
		set_user
		if @user
			@user.destroy
			render json: {}
	else
			render json: {error: "user not found"}, status: :not_found
	end
	end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:id, :first_name, :last_name, :username, :password, :user_ingredients)
    end
end