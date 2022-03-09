class IngredientsController < ApplicationController
  before_action only: [:index, :show]


  # GET /ingredients
  def index
    @ingredients = Ingredient.order(category: :desc, name: :asc)

    render json: @ingredients
  end

  # GET /ingredients/1
  def show
    render json: @ingredient
  end

  # POST /ingredients
  # def create
  #   @ingredient = Ingredient.new(ingredient_params)

  #   if @ingredient.save
  #     render json: @ingredient, status: :created, location: @ingredient
  #   else
  #     render json: @ingredient.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /ingredients/1
  # def update
  #   if @ingredient.update(ingredient_params)
  #     render json: @ingredient
  #   else
  #     render json: @ingredient.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /ingredients/1
  def destroy
    @user_ingredient = UserIngredient.find_by(ingredient_id: params[:id], user_id: params[:user_id])
    @user_ingredient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ingredient
      @ingredient = Ingredient.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ingredient_params
      params.require(:ingredient).permit(:name, :category)
    end
end
