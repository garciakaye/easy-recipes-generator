class User < ApplicationRecord
  has_secure_password # password setter / encrypt_password / authenticate
  has_many :user_ingredients
  has_many :ingredients, through: :user_ingredients


end
