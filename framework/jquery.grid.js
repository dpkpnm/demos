function grid(el, options) {
  var defaults = {cols:8, rows:3, maxCols:8, maxRows:3, m:4,w:innerWidth,h:innerHeight };
  settings = $.extend({}, defaults, options);

  $el = $(el);
  $el.addClass("grid");
  $el.children().addClass("box");
  boxW=(settings.w)/settings.cols-2*settings.m;
  boxH=(settings.h)/settings.rows-2*settings.m;

  m=settings.m;

  id=el.substring(1,el.length);
  styleid=id.replace(".","")+"style";

  idBox=el+" .box";
<<<<<<< HEAD

  if($(styleid).length==0)
    $("head").append("<style id=" +styleid+"></style>");

  styleObj = $("#"+id +"style");

  var str=".page{width:" + innerWidth+ "px;height:" +innerHeight  + "px;transform: matrix(1, 0, 0, 1, " + innerWidth + ", 0);} " + idBox + "{width:" +boxW + "px;height:"+boxH+"px;}";

=======
  
  if($(styleid).length==0)
    $("head").append("<style id=" +styleid+"></style>");
  
  styleObj = $("#"+id +"style");
  
  var str=".page{width:" + innerWidth+ "px;height:" +innerHeight  + "px;transform: matrix(1, 0, 0, 1, " + innerWidth + ", 0);} " + idBox + "{width:" +boxW + "px;height:"+boxH+"px;}";
  
>>>>>>> origin/master
  for(k=0;k<settings.maxCols; k++) {
    left=(k)*boxW+(2*k+1)*m;
    str+=idBox + "[x=\"" + (k+1) + "\"] {left:" +left+"px;} "
    width=boxW*(k+1)+(k*m*2);
    str+=idBox + "[sizeX=\"" + (k+1) + "\"] {width:" +width+"px;} "
<<<<<<< HEAD
  }
  for(k=0;k<settings.maxRows; k++) {
    y=(k)*boxH+(2*k+1)*m;
    str+=idBox + "[y=\"" + (k+1) + "\"] {top:" +y+"px;} "
    height=boxH*(k+1)+(k*m*2);
    str+=idBox + "[sizeY=\"" + (k+1) + "\"] {height:" +height+"px;} "
  }
  styleObj.html(str);
=======
  }
  for(k=0;k<settings.maxRows; k++) {
    y=(k)*boxH+(2*k+1)*m;
    str+=idBox + "[y=\"" + (k+1) + "\"] {top:" +y+"px;} "
    height=boxH*(k+1)+(k*m*2);
    str+=idBox + "[sizeY=\"" + (k+1) + "\"] {height:" +height+"px;} "
  }
  styleObj.html(str); 
>>>>>>> origin/master
}


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