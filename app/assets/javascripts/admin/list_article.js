var BG = BG || {};

BG.ListArticle = function () {
  this.initialize();
  }

BG.ListArticle.prototype= {
  initialize:function() {
    this.getAllArticles();
  },

  getAllArticles:function(){
    var self = this;
    $.ajax({
      url: "/articles",
      type: "GET",
      format: "JSON",
      success: function (data, textStatus, jqXHR){
        $( ".articles-list .articles-list-data" ).html("");
        $.each(data, function (i, article) {
          btnShow = '<input type="button" value="Show" id="show_article"/>'
          btnDelete = '<input type="button" article-id="'+article.id+'" value="Delete" id="delete_article"/>'
          row = "<tr id= "+article.id+"><td>"+article.title+"</td><td>"+btnShow+""+btnDelete+"</td></tr>"
          $(".articles-list .articles-list-data").append(row);
        });
        self.deleteSingleArticle();
        self.showSingleArticle();
      },
      error: function (jqXHR, textStatus, errorThrown){
      }
    });
  },
  deleteSingleArticle:function(){
    $(".articles-list-table .articles-list-data #delete_article").click(function(){
      console.log(this);
      var self = this;
      var article_id = $(this).attr('article-id');
       $.ajax({
         url: "/articles/"+article_id,
         type: "DELETE",
         format: "JSON",
         success: function (data, textStatus, jqXHR){
          $(self).closest('tr').remove();
         }
      });
    });
  },
  showSingleArticle:function(){
    $(".articles-list-table .articles-list-data #show_article").click(function(){
      var self = this;
      var article_id = $(this).attr('article-id');
      $.ajax({
        url:"/articles/"+article_id,
        type:"GET",
        format:"JSON",
        success: function (data, textStatus, jqXHR){
          $(self).closest('tr').load('show.html');
          console.log(data);
        }
      });
    });
  },
}