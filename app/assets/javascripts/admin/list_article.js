var BG = BG || {};

  BG.ListArticle = function () {
    this.initialize();
  }
  BG.ListArticle.prototype= {
    initialize:function() {
    this.getAllArticles();
    //this.addShow();
  },

  getAllArticles:function(){
    $.ajax({
      url: "/articles",
      type: "GET",
      format: "JSON",
      success: function (data, textStatus, jqXHR){
        $( ".articles-list .articles-list-data" ).html("");
        $.each(data, function (i, article) {
          button1 = '<input type="button" value="Show" />'
          button2 = '<input type="button" value="Delete" />'
          row = "<tr id= "+article.id+"><td>"+article.title+"</td><td>"+button1+""+button2+"</td></tr>"
          $(".articles-list .articles-list-data").append(row);
        });
      },
      error: function (jqXHR, textStatus, errorThrown){
      }
    });
  }
}