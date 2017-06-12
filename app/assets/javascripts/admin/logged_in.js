var BG = BG || {};

BG.Logged = function () {
  this.initialize();
}
BG.Logged.prototype= {
  initialize:function() {
    this.handleHideAllContainer();
    this.handleEventClick();
  },

  handleHideAllContainer: function() {
    $('.content #newContainer').addClass('hidden');
    $('.content #listContainer').addClass('hidden');
    $('.content #showContainer').addClass('hidden');
  },

  handleEventClick: function() {
    var self = this;
    $('.nav-bar #newArticleClick').click(function(){
      self.handleHideAllContainer();
      $('.content #newContainer').removeClass('hidden');
      var newArticle = new BG.NewArticle();
    });

    $('.nav-bar #listArticleClick').click(function(){
      self.handleHideAllContainer();
      $('.content #listContainer').removeClass('hidden');
      var listArticle = new BG.ListArticle();
    });
  }
}