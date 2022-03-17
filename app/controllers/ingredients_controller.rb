class IngredientsController < ApplicationController
  

  # GET /ingredients
  def index
    @ingredients = Ingredient.order(category: :desc, name: :asc)

    render json: @ingredients
  end

  # GET /ingredients/1
  def show
    render json: @ingredient
  end


  # DELETE /ingredients/1
  def destroy
    @user_ingredient = UserIngredient.find_by(ingredient_id: params[:id], user_id: params[:user_id])
    if @user_ingredient.present?
    @user_ingredient.destroy
    end
    # render json: {}
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
