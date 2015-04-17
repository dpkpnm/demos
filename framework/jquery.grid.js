var grids=[];
;(function($){
  $.fn.grid = function(options) {
    var defaults = {
      cols:8,
      rows:3,
      maxCols:8,
      maxRows:3,
      m:4
    }
    var plugin = this;
    plugin.settings = {};
    var $element = $(this);

    var init = function() {
      $element.addClass("grid");
      $element.children().addClass("box");
      plugin.resize();
    }

    plugin.destroy = function() {
    }

    plugin.resize = function() {
      defaults.w=innerWidth;
      defaults.h=innerHeight;
      plugin.settings = $.extend({}, defaults, options);
      boxW=(plugin.settings.w)/plugin.settings.cols-2*plugin.settings.m;
      boxH=(plugin.settings.h)/plugin.settings.rows-2*plugin.settings.m;
      m=plugin.settings.m;
      id="#"+$element.attr("id");
      idBox=id+" .box";
      if($(id +"style").length==0)
        $("head").append("<style id=" +$element.attr("id")+"style></style>");
      styleObj = $(id +"style");
      var str=idBox + "{width:" +boxW + "px;height:"+boxH+"px;}";
      for(k=0;k<plugin.settings.maxCols; k++) {
        left=(k)*boxW+(2*k+1)*m;
        str+=idBox + "[x=\"" + (k+1) + "\"] {left:" +left+"px;} "
        width=boxW*(k+1)+(k*m*2);
        str+=idBox + "[sizeX=\"" + (k+1) + "\"] {width:" +width+"px;} "
      }
      for(k=0;k<plugin.settings.maxRows; k++) {
        y=(k)*boxH+(2*k+1)*m;
        str+=idBox + "[y=\"" + (k+1) + "\"] {top:" +y+"px;} "
        height=boxH*(k+1)+(k*m*2);
        str+=idBox + "[sizeY=\"" + (k+1) + "\"] {height:" +height+"px;} "
      }
      styleObj.html(str);    }

    init();
    return this;
  }
})(jQuery);

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');