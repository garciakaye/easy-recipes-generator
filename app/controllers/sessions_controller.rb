class SessionsController < ApplicationController
  skip_before_action :authorized
  
  def get_current_user
    render json: current_user
  end

end