var H5P = H5P || {};

H5P.AppearIn = (function ($) {
  
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
        
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      appearRoom: 'h5p',
      appearHeight: '400',
      appearWidth: '550'
    }, options);
    // Keep provided id.
    this.id = id;
};

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    // Set class on container to identify it as a Page Facebook feed
    // container.  Allows for styling later.
    $container.addClass("h5p-appear-in");
  
    // Creates the Box wrapper
    var content = $(document.createElement('iframe'));
    content.attr({
        "src": "https://appear.in/"+this.options.appearRoom,
        "height": this.options.appearHeight,
        "width": this.options.appearWidth
    });
    content.appendTo($container);
    
  };

  return C;
})(H5P.jQuery);
