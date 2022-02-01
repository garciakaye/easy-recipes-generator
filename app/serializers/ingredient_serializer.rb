class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  has_many :user_ingredients
end
