class WelcomeController < ApplicationController
  def index
    render '/blog_view/index' ,layout: false
  end
end
