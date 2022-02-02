class User < ApplicationRecord
  has_secure_password # password setter / encrypt_password / authenticate
  has_many :user_ingredients
  has_many :ingredients, through: :user_ingredients

  # validates :username, presence: true, uniqueness: { case_sensitive: false }
  # validates :first_name, presence: true, case_sensitive: false 
  # validates :last_name, presence: true, case_sensitive: false 

end
