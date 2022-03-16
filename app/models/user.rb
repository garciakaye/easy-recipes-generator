class User < ApplicationRecord
  has_secure_password # password setter / encrypt_password / authenticate
  has_many :user_ingredients
  has_many :ingredients, through: :user_ingredients
  has_one :shopping_list 

  validates :username, presence: true, uniqueness: { case_sensitive: false }, on: :create
  validates :first_name, :last_name, presence: true, uniqueness: { case_sensitive: false }, on: :create
  

end
