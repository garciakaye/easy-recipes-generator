class UserIngredientSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :ingredient_id
  # :ingredient
#   belongs_to :user
#   belongs_to :ingredient
end
