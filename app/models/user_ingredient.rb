class UserIngredient < ApplicationRecord
  belongs_to :user
  belongs_to :ingredient
  
end


# https://api.spoonacular.com/recipes/findByIngredients?apiKey=918beffc44fc41c396c5ed3e8f624650&ingredients=apples,+flour,+sugar&number=2