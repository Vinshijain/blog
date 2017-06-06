var BG = BG || {};

  BG.ListArticle = function () {
    this.initialize();
  }
  BG.ListArticle.prototype= {
    initialize:function() {
      console.log("I'm working...");
    this.getAllArticles();
  },

  getAllArticles:function(){
    $.ajax({
      url: "/articles",
      type: "GET",
      format: "JSON",
      success: function (data, textStatus, jqXHR){
        console.log(data);
      },
      error: function (jqXHR, textStatus, errorThrown){
      }
    });
  }
}