var BG = BG || {};

  BG.ListArticle = function () {
    this.initialize();
  }
  BG.ListArticle.prototype= {
    initialize:function() {
    this.getAllArticles();
  },

  getAllArticles:function(){
    $.ajax({
      url: "/articles",
      type: "GET",
      format: "JSON",
      success: function (data, textStatus, jqXHR){
        $( ".articles-list .articles-list-data" ).html("");
        $.each(data, function (i, article) {
          row = "<tr id= "+article.id+"><td>"+article.title+"</td><td></td></tr>"
          $(".articles-list .articles-list-data").append(row);
        });
      },
      error: function (jqXHR, textStatus, errorThrown){
      }
    });
  }
}