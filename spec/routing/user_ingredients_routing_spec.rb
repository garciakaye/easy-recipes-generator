require "rails_helper"

RSpec.describe UserIngredientsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/user_ingredients").to route_to("user_ingredients#index")
    end

    it "routes to #show" do
      expect(get: "/user_ingredients/1").to route_to("user_ingredients#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/user_ingredients").to route_to("user_ingredients#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/user_ingredients/1").to route_to("user_ingredients#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/user_ingredients/1").to route_to("user_ingredients#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/user_ingredients/1").to route_to("user_ingredients#destroy", id: "1")
    end
  end
end
