var BG = BG || {};

  BG.ListArticle = function () {
    this.initialize();
  }
  BG.ListArticle.prototype= {
    initialize:function() {
    this.getAllArticles();
    //this.deleteSingleArticle();
  },

  getAllArticles:function(){
    $.ajax({
      url: "/articles",
      type: "GET",
      format: "JSON",
      success: function (data, textStatus, jqXHR){
        $( ".articles-list .articles-list-data" ).html("");
        $.each(data, function (i, article) {
          btnShow = '<input type="button" value="Show" />'
          btnDelete = '<input type="button" value="Delete" />'
          row = "<tr id= "+article.id+"><td>"+article.title+"</td><td>"+btnShow+""+btnDelete+"</td></tr>"
          $(".articles-list .articles-list-data").append(row);
        });
      },
      error: function (jqXHR, textStatus, errorThrown){
      }
    });
  }
}