class User < ApplicationRecord
  has_secure_password # password setter / encrypt_password / authenticate
  has_many :ingredients
  has_many :user_ingredients, through: :ingredients


end
