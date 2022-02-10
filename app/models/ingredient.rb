class Ingredient < ApplicationRecord
  has_many :user_ingredients
  has_many :users, through: :user_ingredients

  def self.category_desc
    all.order(category: :desc, name: :asc)
  end

end
