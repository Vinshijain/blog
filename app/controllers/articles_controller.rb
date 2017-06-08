class ArticlesController < ApplicationController
  # http_basic_authenticate_with name: "Vinshi", password: "secret", except: [:index, :show]
  def index
    @articles = Article.all
    render :json => @articles, :status => :ok
  end
 
  def show
    @article = Article.find(params[:id])
    render :json => @article, :status => :ok
  end

  def new
    @article = Article.new
  end

  def edit
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)
    
    if @article.save
      render :json => @article, :status => :ok
    else
      render :json => @article.errors, :status => :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])
 
    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end

  def destroy
    begin
      @article = Article.find(params[:id])
      @article.destroy
      render :json => {}, :status => :ok
    rescue => e
      render json: {error: e.message}, status: :unprocessable_entity
    end
  end
 
  private
  def article_params
    params.require(:article).permit(:title, :text)
  end
end

