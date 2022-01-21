class ApplicationController < ActionController::API
  include ActionController::Cookies

  def encode_token(payload)
    JWT.encode(payload, ENV['JWT_SECRET'])
  end

end
