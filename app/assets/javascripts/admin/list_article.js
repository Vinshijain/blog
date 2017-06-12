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
          btnShow = '<input type="button" value="Show" class="show_article"/>'
          btnDelete = '<input type="button" article-id="'+article.id+'" value="Delete" class="delete_article"/>'
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
    $(".articles-list-table .articles-list-data .delete_article").click(function(){
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
  showArticleContainer:function(){
    $('.content #listContainer').addClass('hidden');
    $('.content #showContainer').removeClass('hidden');
  },

  showSingleArticle:function(){
    var self = this;
    $(".articles-list-table .articles-list-data .show_article").click(function(){
      self.showArticleContainer();
      var article_id = $(this).parents('tr').attr('id');
      $.ajax({
        url:"/articles/"+article_id,
        type:"GET",
        format:"JSON",
        success: function (data, textStatus, jqXHR){
          console.log(data);
          $("#showContainer #articleTitle").text(data.title);
          $('#showContainer #descriptionArea').val(data.text);
        }     
      });
    });
  },
}