var BG = BG || {};

  BG.NewArticle = function () {
    this.initialize();
  }
  BG.NewArticle.prototype={
    initialize:function() {
      this.handleSubmitArticle();
      //this.getAllArticles();
  },

  handleSubmitArticle:function(){ 
    $('#newContainer #articleForm #articleSubmitButton').click(function(e){
      e.preventDefault();
      var attr = {};
      attr['title'] = $('#newContainer #articleForm #title').val();
      attr['text'] = $('#newContainer #articleForm #description').val(); 
      
      $.ajax({
        url: "/articles",
        type: "POST",
        data: {article:attr},
        format: "JSON",
        success: function (data, textStatus, jqXHR){
          console.log(data);
          attr['title'] = $('#newContainer #articleForm #title').val('');
          attr['text'] = $('#newContainer #articleForm #description').val(''); 

        },
        error: function (jqXHR, textStatus, errorThrown){
        }
      });
    });
  },
}